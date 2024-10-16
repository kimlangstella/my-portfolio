import { Navbar } from '@/components/Navbar';
import React from 'react';

const page = () => {
  return (
    <div className='flex min-h-screen justify-center items-center flex-col bg-[#121212] px-12 py-4'>
      <Navbar />
      <section className='bg-indigo-600 w-full max-w-[440px] text-center p-8 rounded-lg shadow-lg'>
        <h2 className='text-4xl font-semibold mb-4 text-white'>Contact Me</h2>
        <h3 className='text-lg text-white mb-2 font-medium'>tiengkimlang10@gmail.com</h3>
        <p className='text-base text-gray-300 mb-8'>Feel free to reach out with any inquiries or questions!</p>
        
        <div className='flex flex-col gap-6 mb-6'>
          <div className='flex justify-between gap-4'>
            <div className='w-1/2'>
              <label htmlFor='name' className='block text-sm text-gray-200 mb-2'>Name</label>
              <input
                type='text'
                id='name'
                className='bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full p-2'
              />
            </div>
            <div className='w-1/2'>
              <label htmlFor='email' className='block text-sm text-gray-200 mb-2'>Email Address</label>
              <input
                type='email'
                id='email'
                className='bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full p-2'
              />
            </div>
          </div>
          <div>
            <label htmlFor='message' className='block text-sm text-gray-200 mb-2'>Message</label>
            <textarea
              id='message'
              rows='4'
              className='bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full p-2'
            ></textarea>
          </div>
        </div>
        
        <button className='border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-indigo-600 transition-all duration-300 ease-in-out shadow-md'>
          Submit
        </button>
      </section>
    </div>
  );
};

export default page;
