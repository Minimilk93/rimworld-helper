import type { NextApiRequest, NextApiResponse } from 'next';
import { getItems } from '../../../lib/mongo';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === 'GET') return getItems(req, res);
}
