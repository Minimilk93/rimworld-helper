import Image from 'next/image';
import CraftingDetail from './CraftingDetail';
import Stats from './Stats';
import Introduction from './Introduction';
import { sanitiseImageName } from '../lib/helpers';

export default function DetailCard({ selectedItem, category }) {
  return (
    <div className="relative text-white">
      <div className="block p-6 border shadow-md bg-gray-800 border-gray-700">
        {Object.keys(selectedItem).length ? (
          <>
            <div>
              <div className="flex mb-4">
                <div className="border shadow-md border-gray-500 flex">
                  <Image
                    src={sanitiseImageName(selectedItem.name)}
                    width="64px"
                    height="64px"
                    alt={selectedItem.name}
                    className="bg-gray-700 "
                  />
                </div>
                <div className="ml-4">
                  <h5 className="mb-1 text-2xl font-semibold tracking-tight text-white">
                    {selectedItem.name}
                  </h5>
                  <p className="mb-2 text-leading text-gray-400">
                    {selectedItem.primaryCategory} -{' '}
                    {selectedItem.secondaryCategory}
                  </p>
                </div>
              </div>

              <p className="text-gray-400 mb-6 text-sm">{selectedItem.desc}</p>

              {selectedItem.baseStats ? (
                <Stats item={selectedItem.baseStats} title="Base Stats" />
              ) : null}

              {selectedItem.detailedStats ? (
                <Stats
                  item={selectedItem.detailedStats}
                  title="Detailed Stats"
                />
              ) : null}

              {selectedItem.crafting.work_to_make ? (
                <CraftingDetail item={selectedItem.crafting} />
              ) : null}
            </div>
          </>
        ) : (
          <Introduction />
        )}
      </div>
    </div>
  );
}
