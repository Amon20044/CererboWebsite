"use client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6t8se1v', 'template_2kwoj4n', form.current, {
        publicKey: 'Ct7d36vKg7kXb45qJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-100">
          Contact Us
        </h2>
        <p className="mt-2 text-center text-sm text-gray-400">
          We'd love to hear from you!
        </p>
        <form ref={form} onSubmit={sendEmail} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label htmlFor="user_name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                id="user_name"
                name="user_name"
                type="text"
                required
                className="appearance-none rounded-md relative mt-1 block w-full px-3 py-2 border border-gray-700 bg-gray-800 placeholder-gray-500 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="user_contact" className="mt-4 block text-sm font-medium text-gray-300">
                Contact Information
              </label>
              <input
                id="user_contact"
                name="user_contact"
                type="text"
                required
                className="appearance-none rounded-md mt-1 relative block w-full px-3 py-2 border border-gray-700 bg-gray-800 placeholder-gray-500 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Phone or other contact"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="user_email" className="mt-4 block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                id="user_email"
                name="user_email"
                type="email"
                required
                className="appearance-none rounded-md mt-1 relative block w-full px-3 py-2 border border-gray-700 bg-gray-800 placeholder-gray-500 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="mt-4 block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="appearance-none rounded-md mt-1 relative block w-full px-3 py-2 border border-gray-700 bg-gray-800 placeholder-gray-500 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                rows="4"
                placeholder="Your message"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
