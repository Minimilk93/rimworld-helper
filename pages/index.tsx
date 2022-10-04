import { useState, useEffect } from 'react';
import Search from '../components/Search';
import useDebounce from '../lib/useDebounce';
import Table from '../components/Table';
import Dropdown from '../components/Dropdown';
import DetailCard from '../components/DetailCard';

export default function Home({ items }) {
  const [searchInput, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState(items.data);
  const [selectedItem, setSelectedItem] = useState<any>({});
  const [category, setCategory] = useState('all');
  const [order, setOrder] = useState('asc');
  const [sortField, setSortField] = useState('');

  const debouncedSearchTerm = useDebounce(searchInput, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const filtered = !searchInput.length
        ? items.data
        : items.data.filter((item) =>
            item.name.toLowerCase().includes(searchInput.toLowerCase())
          );

      setFilteredData(filtered);
    } else {
      setFilteredData(items.data);
    }
  }, [debouncedSearchTerm]);

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...filteredData].sort((a, b) => {
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), 'en', {
            numeric: true,
          }) * (sortOrder === 'asc' ? 1 : -1)
        );
      });
      setFilteredData(sorted);
    }
  };

  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === 'asc' ? 'desc' : 'asc';
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  const handleSearchChange = (e) => {
    setSearchInput(e);
  };

  const handleItemSelectionChange = (item) => {
    setSelectedItem(item);
  };

  const handleCategoryChange = (category: string): void => {
    const categorisedData = filteredData.filter((item) =>
      item.primaryCategory.toLowerCase().includes(category)
    );

    categorisedData.length
      ? setFilteredData(categorisedData)
      : setFilteredData(items.data);

    setCategory(category);
  };

  return (
    <div className="px-3 grid grid-cols-6 gap-3">
      <div className="grid grid-cols-1 gap-3 order-1 col-span-6 lg:grid-cols-6 lg:col-span-4">
        <div className="lg:col-span-5">
          <Search handleSearchChange={handleSearchChange} />
        </div>
        <Dropdown
          selectedCategory={category}
          handleCategoryChange={handleCategoryChange}
        />
      </div>

      <div className="col-span-6 lg:col-span-4 order-3 h-full">
        <Table
          data={filteredData}
          handleItemSelectionChange={handleItemSelectionChange}
          handleSortingChange={handleSortingChange}
          selectedItem={selectedItem.name}
          order={order}
        />
      </div>

      <div className="col-span-6 lg:col-span-2 order-2 row-span-6">
        <DetailCard selectedItem={selectedItem} category={category} />
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const dev = process.env.NODE_ENV !== 'production';
  const { DEV_URL, PROD_URL } = process.env;

  const response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/items`);
  const items = await response.json();

  return {
    props: {
      items,
    },
  };
}
