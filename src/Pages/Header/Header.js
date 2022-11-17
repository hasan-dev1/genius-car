import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../assets/logo.svg'
import { FaShoppingBag } from "react-icons/fa";
import { useContext } from 'react';
import { UserContext } from '../../Others/AuthContext/AuthContext';

const Header = () => {

  const { user, logedOut } = useContext(UserContext);

  const handleLogout = ()=>{
    logedOut()
  }
    const headerMenu = [
        <Link key={1} className='block btn btn-outline btn-success rounded-lg hover:mx-[0.20rem] lg:flex md:flex' to={'/'}>Home</Link>,
        <Link key={2} className='block btn btn-outline btn-success rounded-lg hover:mx-[0.20rem] lg:flex md:flex' to={'/about'}>About</Link>,
        <Link key={3} className='block btn btn-outline btn-success rounded-lg hover:mx-[0.20rem] lg:flex md:flex' to={'/services'}>Services</Link>,
        <Link key={4} className='block btn btn-outline btn-success rounded-lg hover:mx-[0.20rem] lg:flex md:flex' to={'/blog'}>Blog</Link>,
        <Link key={5} className='block btn btn-outline btn-success rounded-lg hover:mx-[0.20rem] lg:flex md:flex' to={'/contact'}>Contact</Link>,

       user?.uid ?<>
       <Link onClick={handleLogout} key={6} className='block btn btn-outline btn-success rounded-lg hover:mx-[0.20rem] lg:flex md:flex'>LogOut</Link>
       <Link key={9} className='block btn btn-outline btn-success rounded-lg hover:mx-[0.20rem] lg:flex md:flex' to={'/orderdetails'}>Order</Link>
       </>
        :
        <><Link key={7} className='block btn btn-outline btn-success rounded-lg hover:mx-[0.20rem] lg:flex md:flex' to={'/signup'}>SignUp</Link>
        <Link key={8} className='block btn btn-outline btn-success rounded-lg hover:mx-[0.20rem] lg:flex md:flex' to={'/login'}>Login</Link>
        
        </>
        
    ]
    return (
      <div className=" shadow-lg">
        <div className="navbar bg-base-100 w-4/5 mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <div>{headerMenu}</div>
              </ul>
            </div>
            <Link className="btn btn-ghost normal-case text-xl">
              <img className="w-full h-full" src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 headeritem text-white my-5">
              {headerMenu}
            </ul>
          </div>
          <div className="navbar-end ">
            <div className="btn btn-outline rounded-lg btn-success mx-2 text-pink-600">
              <FaShoppingBag></FaShoppingBag>
            </div>
            <button className="btn btn-outline rounded-lg btn-success ">
              Appointment
            </button>
          </div>
        </div>
      </div>
    );
};

export default Header;