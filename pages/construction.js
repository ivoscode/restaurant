import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const construction = () => {
  return (
    <div className='h-screen flex flex-col items-center mt-40'>
      <Link href='/'>
        <div className=' flex flex-col cursor-pointer items-center'>
          <Image
            src='/images/construction-dog.jpg'
            width={150}
            height={150}
            priority
            alt='under construction'
          />
          <h1>
            Sorry, the page is under construction. <br /> Please
            <span className='underline'> click here </span> to go back.
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default construction;
