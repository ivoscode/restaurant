import React from 'react';
import Image from 'next/image';

const CafeBar = () => {
  return (
    <div className='cafe m-7'>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full h-72 md:h-96 md:w-1/2  border-blue-300 border-2 p-2 flex'>
          <div className='relative h-full w-full justify-center items-center'>
            <Image
              src='/images/cafe.jpg'
              alt='cafe'
              layout='fill'
              objectFit='cover'
              objectPosition='center center'
            />
          </div>
        </div>
        <div className='md:w-1/2'>
          <div className='mx-8 md:w-1/2 md:mx-20'>
            <h1 className='my-5 text-2xl'>Cafe/Lounge</h1>
            <p>
              Savor seasonal farm-to-table cuisine at Delicieux. Perfect for a
              satisfying breakfast, a quick lunch or a casual dinner, our
              restaurant offers al fresco dining on a seasonal patio and
              privately in an intimate dining room where a living green wall and
              skylight add to the eco-urban atmosphere.
            </p>
            <h2 className='mt-4 font-bold'>Hours of Operation</h2>
            <p>
              Open daily
              <br />
              Breakfast 7AM - 11PM
              <br />
              All-Day Dining 11AM - 11PM
            </p>
          </div>
        </div>
      </div>

      {/*section 2*/}
      <div className='flex flex-col md:flex-row-reverse mt-20 md:mt-36'>
        <div className='w-full h-72 md:h-96 md:w-1/2  border-blue-300 border-2 p-2 flex'>
          <div className='relative h-full w-full justify-center items-center'>
            <Image
              src='/images/roof.jpg'
              alt='cafe'
              layout='fill'
              objectFit='cover'
              objectPosition='center center'
            />
          </div>
        </div>
        <div className=' md:w-1/2 flex justify-end '>
          <div className='mx-8 md:w-1/2 md:mx-20  '>
            <h1 className='my-5 text-2xl'>Rooftop Bar</h1>
            <p>
              Featuring dramatic views of the Dervent River, our rooftop duplex
              bar and lounge sparkles like a bronze lantern atop a soaring,
              20-story tower. Blending miles of glass with concrete, chrome and
              luxurious leather finishes, this strikingly designed two-level
              space dazzles with hand-crafted cocktails and a constellation of
              blown-glass pendants that seemingly float in air.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CafeBar;
