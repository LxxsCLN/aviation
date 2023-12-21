"use client"
import React, { useState } from 'react'
import { useTranslations } from 'next-intl';

import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

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
    <div className='flex flex-col items-center pb-3'>
      <h1 className='p-5 text-5xl '>{t("title")}</h1>
      <main className='flex flex-col w-5/6 gap-4 md:p-2 md:flex-row md:gap-0'>
        <aside className='flex flex-col items-center w-full gap-6 md:p-5 md:w-1/2'>
          <h1 className='text-3xl text-center md:whitespace-nowrap'>{t("GetInTouch")}</h1>
          <div className='grid grid-cols-5 grid-rows-3 gap-y-8'>
            <FontAwesomeIcon icon={faEnvelope} className="" />
            <a href="#" className='col-span-4 text-slate-400'>luisespinosbr@gmail.com</a>
            <FontAwesomeIcon icon={faPhone} className="" />
            <a href="#" className='col-span-4'>(667) 101-5325</a>
            <FontAwesomeIcon icon={faLocationDot} className="" />
            <a href="#" className='col-span-4'>Culiacán, Sinaloa, México</a>
          </div>
        </aside>
        <form onSubmit={handleSubmit} className="flex flex-col w-full p-4 border border-gray-200 md:w-1/2 rounded-2xl">
          <div className='flex gap-3'>
            <label htmlFor="firstName" className="mb-2">
              {t("FirstName")}:
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full font-normal input input-bordered border-slate-500"
                required
              />
            </label>

            <label htmlFor="lastName" className="mb-2">
              {t("LastName")}:
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full font-normal input input-bordered border-slate-500"
                required
              />
            </label>
          </div>

          <label htmlFor="email" className="mb-2">
            {t("Email")}:
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full font-normal input input-bordered border-slate-500"
              required
            />
          </label>

          <label htmlFor="message" className="mb-2">
            {t("Message")}:
            <textarea
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full font-normal textarea textarea-bordered border-slate-500"
              required
            ></textarea>
          </label>
          <div className='flex justify-center'>
            <Button text={t("Send")} />

          </div>

        </form>
      </main>
    </div>
  )
}

export default Contact