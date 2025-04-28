// pages/login.tsx
'use client';
import { useForm } from "react-hook-form";
import { useState } from "react";
import jwt from "jsonwebtoken";


type LoginForm = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { register,reset, handleSubmit, formState: { errors } } = useForm<LoginForm>();
  const [token, setToken] = useState<string | null>(null);

  const onSubmit = (data: LoginForm) => {
    // Simulating backend login validation
    if (data.email === "info@gmail.com" && data.password === "password123") {
      const jwtToken = jwt.sign({ email: data.email }, "your-secret-key", { expiresIn: "1h" });
      setToken(jwtToken);
      alert("Login Successful!");
    } else {
      alert("Invalid Credentials!");
    }
    console.log("Form Data:", data);
    console.log("JWT Token:", token);
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center xl:px-[200px] lg:px-[40px] px-[10px] mx-auto lg:py-[100px] py-[50px] bg-white p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Top Nav */}
        <div className="flex justify-between items-center">
          <button className="text-2xl text-black">&larr;</button>
          <button className="text-2xl text-black">&times;</button>
        </div>

        {/* Form Title */}
        <h2 className="text-center text-2xl text-black font-bold">My Email Address is:</h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            placeholder="Email Address..."
            className="border text-black  border-gray-400 placeholder-gray-400  p-3 rounded-lg"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <input
            {...register("password", { required: "Password is required" })}
            type="password"
            placeholder="Password..."
            className="border text-black border-gray-400 p-3 rounded-lg placeholder-gray-400"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

          <button type="submit" className="bg-[#FFA600] hover:bg-yellow-500 text-white font-semibold py-3 rounded-lg">
            Continue
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4">
          <div className="border-t border-gray-300 w-full"></div>
          <span className="text-gray-400">or</span>
          <div className="border-t border-gray-300 w-full"></div>
        </div>

        {/* Social Buttons */}
        <button className="flex cursor-pointer items-center justify-center text-[14px] gap-3 border border-gray-400 text-[#404040]  w-full p-3 rounded-lg">
          <img src="/asset/log-fb.png" alt="Facebook" className="w-5 h-5" />
          Continue with Facebook
        </button>

        <button className="flex cursor-pointer items-center text-center justify-center border-gray-400 text-[14px] gap-3 border text-[#404040] w-full p-3 rounded-lg">
          <img src="/asset/log-apple.png" alt="Apple" className="w-5 h-5" />
          Continue with Apple
        </button>

        <button className="flex cursor-pointer  text-[#404040] text-[14px] items-center justify-between border border-gray-400 w-full p-3 rounded-lg">
          <div className="flex items-center text-left gap-3">
            <img src="/user-icon.png" alt="User" className="w-5 h-5 " />
            Continue as  <br /> info@gmail.com
          </div>
          <img src="/asset/log-google.png" alt="Google" className="w-5 h-5" />
        </button>

        {/* Footer Text */}
        <p className="text-center text-xs text-gray-500">
          By signing I agree to the <span className="font-bold">Terms & Condition</span> and the <span className="font-bold">Privacy Policy</span>
        </p>

        {/* Display token for debug */}
        {token && (
          <div className="mt-4 p-3 border rounded-lg bg-gray-100 break-all">
            <p className="text-xs font-bold">JWT Token:</p>
            <p className="text-xs">{token}</p>
          </div>
        )}
      </div>
    </div>
  );
}
