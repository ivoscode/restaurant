import Awards from '@components/awards';
import CafeBar from '@components/cafe-bar';
import Contact from '@components/contact';
import HeroSlider from '@components/hero-slider';
import Miss from '@components/miss';

export default function IndexPage() {
  return (
    <>
      <HeroSlider />
      <Miss />
      <CafeBar />
      <Awards />
      <Contact />
    </>
  );
}
