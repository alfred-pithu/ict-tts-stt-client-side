import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import CustomLink from '../Hooks/CustomLink';

const Navbar = () => {
    const location = useLocation();
    // console.log(location.pathname);

    return (

        <div className="navbar bg-base-100 pt-7  ">

            <div className=' gap-2  mx-auto'>
                <CustomLink to='/' className="btn btn-ghost normal-case text-xl md:text-4xl ">Text to Speech</CustomLink>

                <CustomLink to='/stt' className="btn btn-ghost normal-case text-xl md:text-4xl">Speech to Text</CustomLink>
            </div>

            <Link to='/admin' className='font-bold pr-4'>Admin</Link>


            {/* Sidebar opener */}
            <label tabIndex="0" htmlFor="admin-panel-sidebar" className="btn btn-ghost btn-circle lg:hidden ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>


        </div>


    );
};

export default Navbar;