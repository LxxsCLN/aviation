"use client"
import React, { useState } from 'react'
import { useTranslations } from 'next-intl';

import Button from '../../components/Button';

const Contact = () => {
  const t = useTranslations('Contact');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='flex flex-col items-center'>
      <h1>{t("title")}</h1>
      <main className='flex flex-row'>
        <aside className='w-1/3 border'>
          Get in touch with us
        </aside>
        <form onSubmit={handleSubmit} className="flex flex-col p-4 border border-gray-200 rounded-lg">
          <div className='flex gap-3'>
            <label htmlFor="firstName" className="mb-2 font-bold text-gray-800">
              First Name:
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full font-normal input input-bordered"
                required
              />
            </label>


            <label htmlFor="lastName" className="mb-2 font-bold text-gray-800">
              Last Name:
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full font-normal input input-bordered"
                required
              />
            </label>
          </div>

          <label htmlFor="email" className="mb-2 font-bold text-gray-800">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full font-normal input input-bordered"
              required
            />
          </label>


          <label htmlFor="message" className="mb-2 font-bold text-gray-800">
            Message:
            <textarea
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full font-normal textarea textarea-bordered"
              required
            ></textarea>
          </label>


          <Button text={"Send"} />
        </form>
      </main>
    </div>
  )
}

export default Contact