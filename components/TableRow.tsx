import NameCell from './NameCell';

export default function TableRow({
  data,
  handleItemSelectionChange,
  selected,
}) {
  return (
    <tr
      key={`key-${data.name}`}
      className={`${
        selected ? 'bg-gray-700' : 'even:bg-rmMediumGrey odd:bg-rmGrey'
      } group relative w-full transition ease-in `}
      onClick={() => handleItemSelectionChange(data)}
    >
      <NameCell name={data.name} />
      <td className="px-3">{data.primaryCategory}</td>
      <td className="px-3 text-right">{data.baseStats.market_value}</td>
    </tr>
  );
}
