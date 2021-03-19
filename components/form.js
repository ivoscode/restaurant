import React from 'react';

const Form = () => {
  return (
    <div className=' w-full play '> 
     <form className=' '>
    <h1 className=' text-blue-400 text-xl mb-6'>Stay In The Know</h1>
      <div className='mb-6'>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Your Name'
          required
          className=' form-fields  '
        />
      </div>
      <div className='mb-10'>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Your Email Address'
          required
          className='form-fields'
        />
      </div>
      <div className='mont mb-6 text-xs'>
        <label className=" inline-flex items-center">
          <input type="checkbox" className=""/>
            <span className="ml-2">I have read and agree to the <a href="">Privacy Policy</a>.</span>
      </label>
        <label className=" inline-flex items-center mt-1">
          <input type="checkbox" className="" />
          <span className="ml-2">Yes, I would like to receive emails with exclusive specials and offers.</span>
        </label>
    </div>
      
      <div className=''>
        <button
          type='submit'
          className='mont w-full py-4 tracking-widest text-white bg-gray-900  border border-gray-400'
        >
          SUBSCRIBE
        </button>
      </div>
     
    </form></div>
  );
};

export default Form;
