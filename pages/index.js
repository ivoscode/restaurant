import Awards from '@components/awards';
import CafeBar from '@components/cafe-bar';
import HeroSlider from '@components/hero-slider';
import Mission from '@components/mission';

export default function IndexPage() {
  return (
    <div className=' '>
      <HeroSlider />
      <Mission />
      <CafeBar />
      <Awards />
    </div>
  );
}
