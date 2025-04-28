// pages/contact.tsx
// import { useForm } from "react-hook-form";
"use client";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };

  return (
    <div className=" bg-white flex flex-col items-center p-6 lg:px-[40px] px-[10px] xl:px-[200px] lg:py-[100px] py-[50px]">
      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-full ">
        <div className="flex flex-col items-center p-6 border rounded-lg bg-[#E7E7E7]">
          <img src={'/asset/location.png'} className="w-[80px] h-[80px]"></img>
          <h3 className="font-bold text-lg text-[#101010] mb-2">Location</h3>
          <p className="text-center text-[#404040]">Come say hello at our office HQ: 100 Smith, Collingwood VIC 3066 AU</p>
        </div>

        <div className="flex flex-col items-center p-6 border rounded-lg bg-[#E7E7E7]">
          <img src={'/asset/phone.png'}></img>
          <h3 className="font-bold text-lg text-[#101010]  mb-2">Contact Us</h3>
          <p className="text-center text-[#404040]">Mon-Fri from 8am to 5pm.<br />+1 (555) 000-0000</p>
        </div>

        <div className="flex flex-col items-center p-6 border rounded-lg bg-[#E7E7E7]">
          <img src={'/asset/mail.png'}></img>
          <h3 className="font-bold text-lg text-[#101010] mb-2">E-Mail</h3>
          <p className="text-center text-[#404040]">Our friendly team is here to help.<br />hi@untitledui.com</p>
        </div>
      </div>

      {/* Form */}
      <div className="w-full ">
        <h2 className="text-2xl md:text-[32px] font-bold text-[#101010] text-center mb-2">Got ideas? We've got the skills. Let's team up.</h2>
        <p className="text-center text-gray-600 mb-8">Tell us more about yourself and what you've got in mind.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <label className="text-sm font-semibold text-[#101010]">Name*</label>
          <input
            {...register("name", { required: true })}
            className="p-4 border rounded-lg placeholder-gray-400 text-black bg-[#F6F6F6]"
            placeholder="Full Name..."
          />
          {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
          <label className="text-sm font-semibold text-[#101010]">Email*</label>
          <input
            {...register("email", { required: true })}
            className="p-4 border rounded-lg placeholder-gray-400 text-black bg-[#F6F6F6]"
            placeholder="E-mail..."
            type="email"
          />
          {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
          <label className="text-sm font-semibold text-[#101010]">Phone Number*</label>
          <input
            {...register("phone", { required: true })}
            className="p-4 border rounded-lg placeholder-gray-400 text-black bg-[#F6F6F6]"
            placeholder="Phone Number..."
            type="tel"
          />
          {errors.phone && <span className="text-red-500 text-sm">Phone Number is required</span>}
          <label className="text-sm font-semibold text-[#101010]">Enter Message*</label>
          <textarea
            {...register("message", { required: true })}
            className="p-4 border rounded-lg placeholder-gray-400 bg-[#F6F6F6] h-32 text-black "
            placeholder="Write a message..."
          />
          {errors.message && <span className="text-red-500 text-sm">Message is required</span>}

          <button
            type="submit"
            className="bg-[#FFA600] hover:bg-yellow-600 text-white font-semibold py-4 rounded-lg mt-4 transition-colors duration-300"
          >
            SUBMIT NOW
          </button>
        </form>
      </div>
    </div>
  );
}
