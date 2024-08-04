import React, { useState } from 'react';
import IconArrow from '../icons/IconArrow';
import IconStopwatch from '../icons/IconStopwatch';
import IconLabel from '../icons/IconLabel';
import IconFlag from '../icons/IconFlag';
import { useAppContext } from '@/context';

interface AddTaskModalProps {
  closeModal: () => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ closeModal }) => {
  const { addTodo } = useAppContext();
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(taskName, description);
    closeModal();
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-custom-black p-6 rounded-lg shadow-lg w-96'>
        <h2 className='text-xl mb-4'>Add Task</h2>
        <form onSubmit={handleAddTask}>
          <div className='mb-4'>
            <label className='block text-white'></label>
            <input
              type='text'
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded mt-1 bg-custom-black'
              placeholder='Title'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-white'></label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded mt-1 bg-custom-black'
              placeholder='Description'
            ></textarea>
          </div>
          <div className='flex justify-between'>
            <div className='text-gray-300 flex gap-6 pl-2'>
              <button>
                <IconStopwatch />
              </button>
              <button>
                <IconLabel />
              </button>
              <button>
                <IconFlag />
              </button>
            </div>
            <div>
              <button type='button' className='' onClick={closeModal}></button>
              <button type='submit' className=' text-custom-purple pr-2'>
                <IconArrow />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
