import { capitaliseWords } from '../lib/helpers';

export default function BaseStats({ item, title }) {
  return (
    <div className="mb-3">
      <h5 className="mb-2 pb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white border-b border-gray-700">
        {title}
      </h5>
      {Object.keys(item).map((e, i) => (
        <div key={i} className="flex flex-wrap text-xs md:text-sm">
          <p className="inline-block mr-3 mb-2">
            {capitaliseWords(e.replaceAll('_', ' '))}
          </p>
          <p className="ml-auto">{item[e]}</p>
        </div>
      ))}
    </div>
  );
}
