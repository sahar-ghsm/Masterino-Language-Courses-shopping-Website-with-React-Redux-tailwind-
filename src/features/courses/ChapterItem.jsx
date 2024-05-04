import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import { FaChevronUp } from 'react-icons/fa6';

function ChapterItem({ item }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="mb-3 rounded px-5 pt-2 shadow">
      <div
        onClick={(e) => setShowMore((s) => !s)}
        className="flex cursor-pointer items-center justify-between"
      >
        <h4 className={`${showMore && 'text-green-600'} text-base `}>
          {item.title}
        </h4>
        <div className="flex gap-3">
          <div className="rounded-md bg-blue-100 px-2 py-1 text-sm text-sky-800">
            {item.durationMinute ? `+ ${item.durationHour}` : item.durationHour}{' '}
            hour
          </div>
          <div className="my-auto text-sm">
            {showMore ? (
              <FaChevronUp className="text-green-600" />
            ) : (
              <FaChevronDown />
            )}
          </div>
        </div>
      </div>

      <div
        className={`${showMore ? 'max-h-[100px]' : 'max-h-0 overflow-hidden'} transition-max-height line-clamp-3 pb-1 pt-2 text-sm leading-6 duration-1000 ease-out`}
      >
        {item.description}
      </div>
    </div>
  );
}

export default ChapterItem;
