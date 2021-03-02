import HeroSlider from '@components/HeroSlider';
import Image from 'next/image';

export default function IndexPage() {
  return (
    <div className='flex flex-col items-center justify-center '>
      <HeroSlider />

      <div className='h-96 w-full bg-red-800'> missing div</div>
    </div>
  );
}
