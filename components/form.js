import React from 'react';

const Form = () => {
  return (
    <form>
      <div className='mb-6'>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Full name'
          required
          className=' form-fields '
        />
      </div>
      <div class='mb-6'>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Email'
          required
          className='form-fields'
        />
      </div>

      <div className='mb-6'>
        <textarea
          rows='1'
          name='message'
          id='message'
          placeholder='Your Message'
          className='  form-fields'
          required
        ></textarea>
      </div>
      <div className='mb-6'>
        <button
          type='submit'
          class='w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none'
        >
          Send Message
        </button>
      </div>
      <p className='text-base text-center text-gray-400' id='result'></p>
    </form>
  );
};

export default Form;
