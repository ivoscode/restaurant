import Awards from '@components/awards';
import CafeBar from '@components/cafe-bar';
import HeroSlider from '@components/hero-slider';

export default function IndexPage() {
  return (
    <div className=' '>
      <HeroSlider />

      <CafeBar />
      <Awards />
    </div>
  );
}
