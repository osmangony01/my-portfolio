import { useState } from "react";


const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const navItems = <>
        <li className="pl-8 text-slate-200 text-lg "><a href="#home">Home</a></li>
        <li className="pl-8 text-slate-200 text-lg "><a href="#about">About</a></li>
        <li className="pl-8 text-slate-200 text-lg "><a href="#skills">Skills</a></li>
        <li className="pl-8 text-slate-200 text-lg "><a href="#projects">Projects</a></li>
        <li className="pl-8 text-slate-200 text-lg "><a href="#contact">Contact</a></li>
    </>

    return (
        <div className="lg:px-40 bg-purple-900 text-white opacity-90">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="relative " onClick={() => setToggle(!toggle)}>
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        {
                            toggle && <div className="absolute left-0 top-10 lg:hidden z-20">
                                <ul className="menu menu-compact mt-3 p-2 shadow bg-base-100 rounded-md w-52">
                                    {navItems}
                                </ul>
                            </div>
                        }
                    </div>
                    <div className="flex items-center">
                        <a className="normal-case text-xl md:text-2xl ">Md Osman Gony</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="flex">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;