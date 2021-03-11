import React from 'react';
import Image from 'next/image';

const Awards = () => {
  return (
    <div className='flex  md:flex-row justify-around mx-28 mt-20'>
      <div className=''>
        <Image src='/images/deliveroo.png' height={80} width={80} />
      </div>
      <div className=''>
        <Image src='/images/casual-logo.jpg' height={80} width={80} />
      </div>
      <div className=''>
        <Image src='/images/br-awards.png' height={80} width={80} />
      </div>
      <div className='bg-gray-600'>
        <Image src='/images/estrella.svg' height={80} width={80} />
      </div>
    </div>
  );
};

export default Awards;
