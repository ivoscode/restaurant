import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
  };
  const data = [
    {
      id: 1,
      imgsrc: '/images/bdays.jpg',
      title: 'Birthdays',
      description:
        'We will host your ideal birthday with music, food and entertainment.',
    },
    {
      id: 2,
      imgsrc: '/images/corporate-events.jpg',
      title: 'Corporate Events',
      description:
        'Whether you are looking for an intimate dining event in a beautiful gallery or a large-scale extravaganza in a unique venue we can help.',
    },
    {
      id: 3,
      imgsrc: '/images/pastry.jpg',
      title: 'Pastry Shop',
      description:
        'The fresh hand-made pastry can be combined with a range of organic beverages, including coffee, tea, hot chocolate, and juices.',
    },
    {
      id: 4,
      imgsrc: '/images/weddings.jpg',
      title: 'Weddings',
      description:
        'You are the sole focus of our attention and we have the time to ensure that everything is perfect for you and only you.',
    },
  ];

  return (
    <div className=' bg-blue-500  ' id='hero-slider'>
      <Slider {...settings}>
        {data.map((data) => {
          return (
            <div className='relative' key={data.id}>
              <div className='hero-image-wrapper'>
                <Image
                  src={data.imgsrc}
                  alt='food images'
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center center'
                />
              </div>
              <div className=' hero-description'>
                <div className='flex flex-col justify-center h-full'>
                  <h1 className='mb-5 text-3xl'> {data.title}</h1>
                  <p className='text-lg'>{data.description}</p>
                  <Image
                    src='/images/right-arrow.svg'
                    alt='arrow'
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HeroSlider;
