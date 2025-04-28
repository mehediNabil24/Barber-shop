// components/Footer.tsx

import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#3a3a3a] text-white text-sm">
      <div className="xl:px-[200px] lg:px-[40px] px-[10px] mx-auto">
      <div className=" py-8 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex flex-wrap gap-6">
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Service</a>
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">Pricing</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Cookies</a>
        </div>
        <div className="mt-6 md:mt-0 ">
          <a href="#" className="hover:underline">Log in / Sign up</a>
        </div>
      </div>
      <hr className="border-gray-600 mx-6" />
      <div className=" py-6 flex flex-col md:flex-row md:justify-between items-center">
        <div className="text-gray-300 mb-4 md:mb-0">
          Copyright © 2005 - 2025 Rated People Ltd. All Rights Reserved
        </div>
        <div className="flex gap-4">
          <a href="#" className="border border-gray-400 p-2 rounded-full hover:bg-gray-600">
            <FaFacebookF size={16} />
          </a>
          <a href="#" className="border border-gray-400 p-2 rounded-full hover:bg-gray-600">
            <FaInstagram size={16} />
          </a>
          <a href="#" className="border border-gray-400 p-2 rounded-full hover:bg-gray-600">
            <FaXTwitter size={16} />
          </a>
          <a href="#" className="border border-gray-400 p-2 rounded-full hover:bg-gray-600">
            <FaLinkedinIn size={16} />
          </a>
          <a href="#" className="border border-gray-400 p-2 rounded-full bg-[#FFA600] hover:bg-[#ffb400] text-black hover:text-white">
            <FaYoutube size={16} className="bg-[#FFA600]" />
          </a>
        </div>
        </div>
      </div>
    </footer>
  );
}
