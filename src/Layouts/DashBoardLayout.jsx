import React from 'react';
import logoHori from '../assets/logo.png'
import { Link, Outlet } from 'react-router';
import { RxDashboard } from "react-icons/rx";
import { LiaUsersCogSolid } from "react-icons/lia";
import { IoClipboardOutline } from 'react-icons/io5';
import { MdOutlinePayment } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { GrServicePlay } from "react-icons/gr";
import useRole from '../Hooks/useRole';

const DashBoardLayout = () => {
  const { role } = useRole();
  console.log(role);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">
          <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
            {/* Sidebar toggle icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
          </label>
          <div className="px-4">StyleDecor DashBoard</div>
        </nav>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible border-r-2 border-r-base-300">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* List item */}

            {/* logo */}
            <li>
              <Link to='/' className='is-drawer-close:hidden'>
                <img className='max-h-12 max-w-24' src={logoHori} alt="" />
              </Link>
            </li>

            {/* Dashboard */}
            <Link to='/dashboard'>
              <li>
                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Dashboard">
                  <RxDashboard size={17} />
                  <span className="is-drawer-close:hidden">Dashboard</span>
                </button>
              </li>
            </Link>

            {/* My Profile */}
            <Link to='/dashboard/my-profile'>
              <li>
                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Profile">
                  <FaRegUser size={17} />
                  <span className="is-drawer-close:hidden">My Profile</span>
                </button>
              </li>
            </Link>

            {/* My Booking */}
            <Link to='/dashboard/my-booking'>
              <li>
                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Booking">
                  <IoClipboardOutline size={17} />
                  <span className="is-drawer-close:hidden">My Booking</span>
                </button>
              </li>
            </Link>

            {/* Payment History */}
            <Link to='/dashboard/payment-history'>
              <li>
                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Payment History">
                  <MdOutlinePayment size={17} />
                  <span className="is-drawer-close:hidden">Payment History</span>
                </button>
              </li>
            </Link>

            {/* admin menus */}
            {
              role === 'admin' && <>
                {/* Manage Decorators */}
                <Link to='/dashboard/manage-users'>
                  <li>
                    <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Manage Users">
                      <LiaUsersCogSolid size={19} />
                      <span className="is-drawer-close:hidden">Manage Users</span>
                    </button>
                  </li>
                </Link>

                {/* Manage Services */}
                <Link to='/dashboard/manage-services'>
                  <li>
                    <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Manage Services">
                      <GrServicePlay size={17} />
                      <span className="is-drawer-close:hidden">Manage Services</span>
                    </button>
                  </li>
                </Link>

              </>
            }


          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;