import Image from 'next/image';

export default function Footer() {
  return (
    <footer className=' w-full max-w-7xl flex'>
      <ul className=' items-center  w-1/2 md:w-1/3 flex h-28 '>
        <li className='ml-5'>
          <a className='cursor-pointer'>
            <Image src='/images/instagram.svg' height={30} width={30} />
          </a>
        </li>
        <li className='ml-5'>
          <a className='cursor-pointer'>
            <Image src='/images/twiter.svg' height={30} width={30} />
          </a>
        </li>
        <li className='ml-5'>
          <a className='cursor-pointer'>
            <Image src='/images/facebook.svg' height={30} width={30} />
          </a>
        </li>
      </ul>
      <div className='flex justify-end items-center w-full text-gray-900'>
        <span className=' inline-block mr-10'>
          ©2021&nbsp; Delicieux, Derby
        </span>
      </div>
    </footer>
  );
}
