import Header from './components/home/Header';
import Body from './components/home/Body';
import BottomBar from './components/home/BottomBar';

export default function Home() {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Header />
      <Body />
      <BottomBar />
    </div>
  );
}
