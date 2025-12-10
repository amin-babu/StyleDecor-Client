import { Link } from 'react-router';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-t-gray-300 text-base-content pt-10">
      <div className="w-11/12 mx-auto footer grid grid-cols-1 md:grid-cols-4">

        {/* Logo and About */}
        <div>
          <Link to='/'>
            <img src={logo} alt="logo" className="h-18 mb-2" />
          </Link>
          <p className="text-[16px] text-gray-600">A modern appointment management system for a local decoration company that offers decoration services for homes and ceremonies.</p>
        </div>

        {/* Contact Info */}
        <div className='lg:mx-auto gap-2 mx-0'>
          <h3 className="footer-title">Contact</h3>
          <p className='text-gray-600 hover:underline text-[16px]'>Email: support@styledecor.org</p>
          <p className='text-gray-600 hover:underline text-[16px]'>Phone: +880 1234-567890</p>
          <p className='text-gray-600 hover:underline text-[16px]'>Dhaka, Bangladesh</p>
        </div>

        {/* Social Links */}
        <div className='lg:mx-auto gap-2 mx-0'>
          <h3 className="footer-title">Follow Us</h3>
          <div className="flex flex-col  gap-2">
            <a className="link link-hover text-gray-600 hover:underline  text-[16px]">Facebook</a>
            <a className="link link-hover text-gray-600 hover:underline  text-[16px]">Instagram</a>
            <a className="link link-hover text-gray-600 hover:underline  text-[16px]">LinkedIn</a>
          </div>
        </div>

        {/* Privacy Policy */}
        <div className='lg:mx-auto mx-0 gap-2'>
          <h3 className="footer-title">Legal</h3>
          <a className="link text-[16px] link-hover text-gray-600 hover:underline">Privacy Policy</a>
          <a className="link text-[16px] link-hover text-gray-600 hover:underline">Terms & Conditions</a>
        </div>
      </div>

      <div className="text-center mt-8 py-5 border-t border-t-gray-300">
        <p className=" text-[16px] text-gray-600">
          © {new Date().getFullYear()} StyleDecor. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;