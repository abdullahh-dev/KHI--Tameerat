import { data } from 'autoprefixer';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Email must be a valid email')
    .required('Email is required'),
  message: yup.string().required('Message is required'),
});

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = (data) => {};
  //
  return (
    <>
      <form onSubmit={handleSubmit(formSubmit)} className="space-y-4 w-full">
        <div>
          <label htmlFor="name" className="block font-medium">
            Name
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            name="name"
            className="w-full aria-errormessage:bg-black mt-2 h-8 text-[#333333] px-2 rounded-[4px]"
          />
          {errors.name && (
            <p className="text-[14px] font-bold mt-1 text-red-600">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            name="email"
            className="w-full mt-2 h-8 text-[#333333] px-2 rounded-[4px]"
          />
          {errors.email && (
            <p className="text-[14px] font-bold mt-1 text-red-600">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="message" className="block font-medium">
            Message
          </label>
          <textarea
            {...register('message')}
            id="message"
            name="message"
            rows="4"
            className="w-full h-[120px] mt-2 text-[#333333] px-2 rounded-[4px]"></textarea>
          {errors.message && (
            <p className="text-[14px] font-bold text-red-600">
              {errors.message?.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-[#9dd221] p-2 text-[#333333] rounded-[4px] hover:bg-[#abdd35] w-full">
          Submit
        </button>
      </form>
    </>
  );
}

export default ContactForm;
