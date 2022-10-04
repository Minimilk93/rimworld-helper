export default function Dropdown({ selectedCategory, handleCategoryChange }) {
  return (
    <form className="w-full">
      <fieldset>
        <div className="relative border-gray-600 text-white">
          <label htmlFor="categories" className="sr-only">
            My field
          </label>
          <select
            className="appearance-none w-full px-3 py-4 bg-gray-700 placeholder-gray-400 border-blue-500 text-white focus:ring-blue-500 focus:border-blue-500"
            name="categories"
            id="categories"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="all">All</option>
            <option value="food">Food</option>
            <option value="material">Materials</option>
            <option value="textile">Textiles</option>
          </select>
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-white">
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </fieldset>
    </form>
  );
}
