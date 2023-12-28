// contact.jsx

import React from 'react';

function Contact() {
  return (
    <div>
      <p className='w-full text-center font-bold text-4xl my-8'>Connect with me</p>
      <div>
      <form
        action="https://formspree.io/f/xnqeqael"
        method="POST"
        className="max-w-md mx-auto"
      >
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            name="email"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
          <textarea
            name="message"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Contact;
