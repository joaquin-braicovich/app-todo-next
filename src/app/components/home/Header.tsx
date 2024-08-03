import IconList from '../icons/IconList';

const Header = () => {
  return (
    <>
      <div className='flex justify-between pl-6 pr-6 pt-4 items-center'>
        <div>
          <IconList />
        </div>
        <div>Index</div>
        <div className='flex items-center justify-center rounded-full bg-custom-purple  w-10 h-10 text-black text-xl'>
          J
        </div>
      </div>
    </>
  );
};
export default Header;
