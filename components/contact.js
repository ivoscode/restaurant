import Image from 'next/image';
import React from 'react';
import Form from './form';


const Contact = () => {
  return (
    <div id='contact'>
      <div className='mont py-24 px-10 md:px-20 flex flex-col md:flex-row text-gray-100 '>
        <div className='  flex flex-col justify-end   w-full md:w-1/2'>
          <div className='address '>
          <div>7 London road, Derby DE1 8PB</div>
            <div className='mt-10 mb-3'><span className='inline-block align-middle mr-2'> <Image
              src='/images/call.svg'
              width={20}
              height={20}
              priority
              alt='phone'
            /></span>  <a className='inline-block'>0744-524-7009</a>
             </div>
            <div>
            <span className='inline-block align-middle mr-2'> <Image
              src='/images/mail.svg'
              width={20}
              height={20}
              priority
              alt='phone'
            /></span>  <a className='cursor-pointer '>contact@delicieux.co.uk</a>
            </div>
            
          </div>
          <div className='social-media'>
            <ul className=' items-center  w-1/2 md:w-1/3 flex h-28 '>
              <li className=''>
                <a className='cursor-pointer'>
                  <Image src='/images/instagram.svg' height={20} width={20} />
                </a>
              </li>
              <li className='ml-5'>
                <a className='cursor-pointer'>
                  <Image src='/images/twitter.svg' height={20} width={20} />
                </a>
              </li>
              <li className='ml-5'>
                <a className='cursor-pointer'>
                  <Image src='/images/facebook.svg' height={20} width={20} />
                </a>
              </li>
            </ul>
          </div>
          <div className='contact-navigation '>
            <ul className='flex flex-wrap cursor-pointer'>
            <li className='mr-2 mb-4'><a>BLOG I</a></li>
            <li className='mr-2 mb-4'><a>CONTACT US I</a></li>
              <li className='mr-2 mb-4'><a>CAREERS I</a></li>
            <li className='mb-4'><a>PRESS</a></li>
            </ul>
          </div>
        </div>
        <div className='flex justify-center md:w-1/2 md:px-8 mt-20 md:mt-0'>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
