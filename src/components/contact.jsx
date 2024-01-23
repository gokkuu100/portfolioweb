import React from 'react';

function Contact() {
  return (
    <div>
      <p className='w-full text-center font-bold text-4xl my-8'>Connect with me</p>
      <div className='flex m-[15rem]'>
        <div className="form-div mr-[6rem]">
        <h2 className='mb-[2rem] font-bold'>Send me an email</h2>
        <form
          action="https://formspree.io/f/xnqeqael"
          method="POST"
          className="max-w-md mx-auto"
        >
          <div className="mb-4 w-[20vw]">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              name="email"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-red-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
            <textarea
              name="message"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-red-500"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline animate-pulse"
            >
              Send Message
            </button>
          </div>
        </form>
        </div>
        <div className='flex flex-col ml-8'>
        <p className='text-xl mb-4 font-bold'>Get me on:</p>
        <a href='https://www.linkedin.com/in/prince-hope-a38114239/' target='_blank' rel='noopener noreferrer'>
          <img alt='LinkedIn' src='/linkedin-svgrepo-com.svg' className='w-10 h-10 cursor-pointer hover:opacity-70' />
        </a> 
        <a href='https://github.com/gokkuu100' target='_blank' rel='noopener noreferrer'>
          <img alt='GitHub' src='/github-svgrepo-com.svg' className='w-10 h-10 mt-4 cursor-pointer hover:opacity-70' />
        </a>
        <a href='tel:+254796564749'>
          <img alt='Phone' src='/whatsapp-svgrepo-com.svg' className='w-10 h-10 mt-4 cursor-pointer hover:opacity-70' />
        </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
