import React from 'react';
import Image from 'next/image';

const Awards = () => {
  return (
    <div className='flex   flex-wrap items-center justify-center sm:justify-between mx-28 lg:mx-40 mt-20'>
      <Image
        className='m-5 w-full sm:w-1/4'
        src='/images/deliveroo.png'
        height={80}
        width={80}
      />

      <Image
        className='m-5  w-full sm:w-1/4'
        src='/images/casual-logo.jpg'
        height={80}
        width={80}
      />

      <Image
        className='m-5 w-full sm:w-1/4'
        src='/images/br-awards.png'
        height={80}
        width={80}
      />

      <Image
        className='m-5 w-full sm:w-1/4 bg-gray-600'
        src='/images/estrella.svg'
        height={80}
        width={80}
      />
    </div>
  );
};

export default Awards;
