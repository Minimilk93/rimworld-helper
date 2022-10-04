import { useState } from 'react';
import TableRow from './TableRow';
import Pagination from './Pagination';

type TableProps = {
  data: any;
  handleItemSelectionChange: Function;
  handleSortingChange: Function;
  selectedItem: string;
  order: string;
};

export default function Table({
  data,
  handleItemSelectionChange,
  handleSortingChange,
  selectedItem,
  order,
}: TableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const numberOfPages = Math.ceil(data.length / recordsPerPage);

  const renderHeader = () => {
    let headerElement = ['name', 'category', 'value'];

    return headerElement.map((key, index) => {
      return (
        <th
          key={key.charAt(0).toUpperCase() + key.slice(1)}
          className="text-sm px-3 py-2 mx-1 text-left first:text-left last:text-right last:pr-6 bg-rmLighterGrey"
          onClick={() => handleSortingChange(key)}
        >
          <span className="relative">
            <span
              className={`h-0 w-0 border-x-4 border-x-transparent ${
                order === 'asc' ? 'border-b-[8px]' : 'border-t-[8px]'
              } border-b-blue-600 absolute -right-4 top-1`}
            ></span>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </span>
        </th>
      );
    });
  };

  const renderBody = () => {
    return (
      <>
        {currentRecords.map((item) => {
          return (
            <TableRow
              key={item.name}
              data={item}
              handleItemSelectionChange={handleItemSelectionChange}
              selected={selectedItem === item.name}
            />
          );
        })}
      </>
    );
  };

  if (!data) return <p>Loading...</p>;

  return (
    <>
      <table className="w-full p-6 bg-gray-800 text-white border border-gray-700 mb-6">
        <thead className="table-head">
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
      <Pagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
