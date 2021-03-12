import React from 'react';
import Form from './form';

const Contact = () => {
  return (
    <div id='contact'>
      <div className='flex flex-col md:flex-row'>
        <div className=' h-96 w-full md:w-1/2'></div>
        <div className='flex justify-center md:w-1/2'>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
