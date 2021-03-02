import Header from './header';
import Footer from './footer';

export default function Layout(props) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen  '>
      <Header />

      <main className='flex-1 flex flex-col items-center justify-center  max-w-7xl '>
        {props.children}
      </main>

      <Footer />
    </div>
  );
}
