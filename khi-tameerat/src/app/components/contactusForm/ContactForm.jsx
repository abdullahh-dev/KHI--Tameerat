import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from 'emailjs-com';
const serviceID = 'service_t1yoxmf';
const templateID = 'template_3n2stst';
const userID = '11Y6RODWlVy_U5hOx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = (data) => {
    emailjs.send(serviceID, templateID, data, userID).then(
      (response) => {
        if ((response.text = 'OK')) {
          toast.success('Email sent successfully!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        }
        reset({
          name: '',
          email: '',
          message: '',
        });
      },
      (error) => {
        toast.error('Failed to send email.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        reset({
          name: '',
          email: '',
          message: '',
        });
      }
    );
  };
  //
  return (
    <>
      <form onSubmit={handleSubmit(formSubmit)} className="space-y-4 w-full">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
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
