import Awards from '@components/awards';
import CafeBar from '@components/cafe-bar';
import Contact from '@components/contact';
import HeroSlider from '@components/hero-slider';
import Mission from '@components/mission';

export default function IndexPage() {
  return (
    <>
      <HeroSlider />
      <Mission />
      <CafeBar />
      <Awards />
      <Contact />
    </>
  );
}
