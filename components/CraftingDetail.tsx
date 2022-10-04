import { useState, useEffect } from 'react';

export default function CraftingDetail({ item }) {
  const [skill, setSkill] = useState(0);

  useEffect(() => {
    const calculatePercentage = () => {
      if (!item.skill_required) return;
      const level = item.skill_required.charAt(item.skill_required.length - 1);

      if (isNaN(parseInt(level))) setSkill(0);

      setSkill((level / 20) * 100);
    };

    calculatePercentage();
  }, [item.skill_required, skill]);

  const barStyle = {
    width: `${skill}%`,
  };

  return (
    <div>
      <h5 className="mb-2 pb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white border-b border-gray-700">
        Crafting
      </h5>
      {skill > 0 ? (
        <div className="flex flex-wrap flex-row mb-2 text-xs md:text-sm">
          <p className="inline-block mr-3">{item.skill_required}</p>
          <div className="ml-auto mt-auto mb-auto h-3 bg-gray-200 dark:bg-gray-700 w-1/2">
            <div
              className="bg-gray-600 h-full text-xs font-medium text-blue-100 text-center p-0.5 leading-none "
              style={barStyle}
            >
              {item.skillLevel}
            </div>
          </div>
        </div>
      ) : null}

      <div className="flex flex-wrap flex-row text-xs md:text-sm mb-2">
        <p className="inline-block mr-3">Creation Speed</p>
        <p className="ml-auto">{item.work_to_make}</p>
      </div>

      <div className="flex flex-wrap flex-row text-xs md:text-sm mb-2">
        <p className="inline-block mr-3">Resources to Make</p>
        <p className="ml-auto w-1/2 text-right">{item.resources_to_make}</p>
      </div>

      {item.crafted_at.length ? (
        <div className="flex flex-wrap flex-row text-xs md:text-sm mb-2">
          <p className="inline-block mr-3">Crafted At</p>
          <p className="ml-auto w-1/2 text-right">
            {item.crafted_at.toString()}
          </p>
        </div>
      ) : null}
    </div>
  );
}
