export default function Pagination({
  numberOfPages,
  currentPage,
  setCurrentPage,
}) {
  const pageNumbers = Array.from(Array(numberOfPages + 1).keys()).slice(1);

  const nextPage = () => {
    if (currentPage !== numberOfPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <nav className="flex items-center space-x-1 mb-6 justify-center">
      <li className="flex items-center px-4 py-2 text-gray-300 bg-gray-800 rounded-md">
        <button onClick={prevPage}>Prev</button>
      </li>
      {pageNumbers.map((number) => (
        <li
          key={number}
          className="flex items-center px-4 py-2 text-gray-300 bg-gray-800 rounded-md"
        >
          <button onClick={() => setCurrentPage(number)}>{number}</button>
        </li>
      ))}
      <li className="flex items-center px-4 py-2 text-gray-300 bg-gray-800 rounded-md">
        <button onClick={nextPage}>Next</button>
      </li>
    </nav>
  );
}
