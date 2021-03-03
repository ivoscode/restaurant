import Link from 'next/link';
import { useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className='bg-white w-full'>
      <div className='flex flex-wrap items-center justify-between lg:container px-4 py-6 mx-auto md:flex-no-wrap md:px-6'>
        <div className='flex items-center'>
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

        <div
          className='flex cursor-pointer items-center  px-3 py-2  text-gray-300 '
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          <svg viewBox='0 0 100 80' width='40' height='40'>
            <rect width='100' height='5' rx='8'></rect>
            <rect y='30' width='100' height='5' rx='8'></rect>
            <rect y='60' width='100' height='5' rx='8'></rect>
          </svg>
        </div>
        <aside
          className={`transform top-10 right-0 w-64 bg-gray-200 fixed h-96 overflow-auto ease-in-out transition-all duration-300 z-30
     ${mobileMenuIsOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className='flex pr-2 justify-end'>
            <button
              onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
              className='p-2 text-white text-xl font-bold'
            >
              &#9747;
            </button>
          </div>
          <div>
            <ul
              className={`  items-center justify-center text-sm w-full 
         `}
            >
              {[
                { title: 'Home', route: '/' },
                { title: 'About', route: '/about' },
              ].map(({ route, title }) => (
                <li className='mt-3 md:mt-0 md:ml-6' key={title}>
                  <Link href={route}>
                    <a className='block text-black'>{title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <ul
          className={`  items-center justify-center text-sm w-full hidden
         `}
        >
          {[
            { title: 'Home', route: '/' },
            { title: 'About', route: '/about' },
          ].map(({ route, title }) => (
            <li className='mt-3 md:mt-0 md:ml-6' key={title}>
              <Link href={route}>
                <a className='block text-black'>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
