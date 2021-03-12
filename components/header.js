import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className='bg-white  w-full max-w-7xl fixed top-0 z-50'>
      <div className='flex flex-wrap items-center justify-between  px-4 py-4  mx-auto md:flex-no-wrap md:px-6'>
        {/*=============Logo==================*/}
        <div id='logo' className='flex items-center  '>
          <Link href='/'>
            <a>
              <Image
                src='/images/logo.png'
                width={60}
                height={60}
                priority
                alt='logo'
              />
            </a>
          </Link>
        </div>
        <div className='hidden absolute top-0 left-0 sm:flex w-full  py-4 items-center justify-center'>
          <Link href='/'>
            <a>
              <Image
                src='/images/logo.png'
                width={60}
                height={60}
                priority
                alt='logo'
              />
            </a>
          </Link>
        </div>

        {/*============   Burger button==========*/}
        <div
          className='flex cursor-pointer z-40 items-center  px-3 py-2  text-gray-300 '
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          <svg viewBox='0 0 100 80' width='40' height='40'>
            <rect width='100' height='5' rx='8'></rect>
            <rect y='30' width='100' height='5' rx='8'></rect>
            <rect y='60' width='100' height='5' rx='8'></rect>
          </svg>
        </div>

        {/*============   Side drawer ==========*/}

        <aside
          className={`transform top-8 right-0 w-64 bg-gray-500 text-white fixed h-96 overflow-auto ease-in-out transition-all duration-300 z-50
     ${mobileMenuIsOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className='flex pr-2 justify-end'>
            <button
              onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
              className='p-2  text-5xl font-bold'
            >
              &#9747;
            </button>
          </div>
          <div>
            <ul
              className={`  items-center justify-center  w-full  
         `}
            >
              {[
                { title: 'Home', route: '/' },
                { title: 'Pastry Shop', route: '/construction' },
                { title: 'Weddings', route: '/construction' },
                { title: 'Birthdays', route: '/construction' },
                { title: 'Corporate Events', route: '/construction' },
                { title: 'About', route: '/construction' },
              ].map(({ route, title }) => (
                <li className='mt-3 ' key={title}>
                  <Link href={route}>
                    <a
                      onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
                      className='block text-center  text-xl'
                    >
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </header>
  );
}
