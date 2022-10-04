import { MongoClient } from 'mongodb';

const MONGODB_URL = process.env.DATABASE_URL;
const MONGODB_DB = process.env.DATABASE_NAME;

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return {
      client: cachedClient,
      db: cachedDb,
    };
  }

  const client = new MongoClient(MONGODB_URL);
  await client.connect();
  const db = client.db(MONGODB_DB);

  cachedClient = client;
  cachedDb = db;

  return {
    client: cachedClient,
    db: cachedDb,
  };
}

export async function getItems(req, res) {
  try {
    const { db } = await connectToDatabase();
    const items = await db.collection('items').find({}).toArray();

    return res.json({
      data: JSON.parse(JSON.stringify(items)),
      success: true,
    });
  } catch (error) {
    // return the error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
