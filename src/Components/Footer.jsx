import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white py-8 text-center">
      {/* Logo and Brand */}
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 mb-4">
          <div className=" text-white rounded-full p-2">
            
            <img src="/public/logo.png" alt="" />
          </div>
          <h1 className="text-xl font-bold">Prescription-Point</h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-gray-700 mb-4">
          <li><a href="/">Home</a></li>
          <li><a href="/bookings">My-Bookings</a></li>
          <li><a href="/blogs">Blogs</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>

        {/* Divider Line */}
        <hr className="border-t border-gray-300 w-3/4 my-4" />

        {/* Social Media Icons */}
        <div className="flex gap-6 justify-center mt-4 text-xl">
          <a href="https://www.facebook.com/jonoprio44" target="_blank" className="text-blue-600 hover:text-blue-800">
            <FaFacebookF />
          </a>
          <a href="https://www.facebook.com/jonoprio44" target="_blank" className="text-black hover:text-gray-800">
            <FaXTwitter />
          </a>
          <a href="https://www.facebook.com/jonoprio44" target="_blank" className="text-blue-700 hover:text-blue-900">
            <FaLinkedinIn />
          </a>
          <a href="https://www.facebook.com/jonoprio44" target="_blank" className="text-red-600 hover:text-red-800">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
