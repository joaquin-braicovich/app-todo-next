import Image from 'next/image';
import imagen from '../../../../public/Checklist-rafiki 1.png';

const Body = () => {
  return (
    <div className='flex-grow flex flex-col items-center justify-center text-center p-4'>
      <Image src={imagen} alt='Checklist' width={200} height={200} />
      <h2 className='text-xl font-semibold mt-4'>
        What do you want to do today?
      </h2>
      <p className='text-gray-600 mt-2'>Tap + to add your tasks</p>
    </div>
  );
};

export default Body;
