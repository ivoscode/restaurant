import React from 'react';
import Image from 'next/image';

const Mission = () => {
  return (
    <div className='bg-gray-500 my-52 sm:my-24 py-8 w-full text-white text-center'>
      <p>
        Our mission is to be the most sustainable restaurant in New York <br />
        by sourcing our ingredients locally, supplementing produce with herbs
        <br />
        grown on our rooftop garden, and giving back to the community through
        <br />
        urban farming education.
      </p>
      <div className='mt-8'>
        <Image src='/images/logo.png' alt='arrow' width={60} height={60} />
      </div>
    </div>
  );
};

export default Mission;
