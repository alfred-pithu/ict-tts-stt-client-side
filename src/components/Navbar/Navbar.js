import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../Hooks/CustomLink';

const Navbar = () => {
    return (

        <div class="navbar bg-base-100 pt-10 flex justify-center gap-2 absolute">

            <CustomLink to='/' class="btn btn-ghost normal-case text-xl md:text-4xl ">Text to Speech</CustomLink>
            <CustomLink to='/stt' class="btn btn-ghost normal-case text-xl md:text-4xl">Speech to Text</CustomLink>

        </div>


    );
};

export default Navbar;