import Header from './header';
import Footer from './footer';

export default function Layout(props) {
  return (
    <div className='flex flex-col items-center overflow-hidden w-full'>
      <Header />
      <main className='max-w-7xl '>{props.children}</main>
      <Footer />
    </div>
  );
}
