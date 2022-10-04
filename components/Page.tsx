import Header from './Header';

export default function Page({ children }) {
  return (
    <div className="bg-rmDarkestGrey">
      <Header />
      <main className="min-h-screen">
        <div>{children}</div>
      </main>
    </div>
  );
}
