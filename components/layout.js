import Head from 'next/head';
import Header from './header';
import Footer from './footer';

export default function Layout(props) {
  return (
    <div className='flex flex-col items-center overflow-hidden w-full'>
      <Head>
        <title>Delicieux</title>
        <meta name='Description' content='Restaurant in Derby.' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#00aba9' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <Header />
      <main className='max-w-7xl '>{props.children}</main>
      <Footer />
    </div>
  );
}
