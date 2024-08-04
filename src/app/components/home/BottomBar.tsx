'use client';

import { useState } from 'react';
import IconCalendar from '../icons/IconCalendar';
import IconClock from '../icons/IconClock';
import IconHouse from '../icons/IconHouse';
import IconPlus from '../icons/IconPlus';
import IconProfile from '../icons/IconProfile';
import AddTaskModal from '../task/AddTaskModal';

const BottomBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className='flex justify-around pl-4 pr-4 bg-custom-black pb-8 pt-2 items-center'>
        <div className=''>
          <button>
            <IconHouse />
          </button>
          <p className='text-xs'>Index</p>
        </div>
        <div>
          <button>
            <IconCalendar />
            <p className='text-xs'>Calendar</p>
          </button>
        </div>
        {/* Add task */}
        <div className='relative bottom-9'>
          <button
            onClick={toggleModal}
            className='flex items-center justify-center rounded-full bg-custom-purple w-16 h-16 text-xs text-white'
          >
            <IconPlus />
          </button>
        </div>
        <div>
          <button>
            <IconClock />
            <p className='text-xs'>Focuse</p>
          </button>
        </div>
        <div>
          <button>
            <IconProfile />
            <p className='text-xs'>Profile</p>
          </button>
        </div>
      </div>
      {isModalOpen && <AddTaskModal closeModal={toggleModal} />}
    </>
  );
};
export default BottomBar;
