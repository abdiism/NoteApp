import React from "react"
import { Link } from "react-router-dom"
import Home from "../pages/Home"
import { CgSearchLoading } from "react-icons/cg";
import { RxUpload } from "react-icons/rx";
export default function Navbar() {
    return (
        <header className=" h-[80px] flex items-center justify-center border border-black">
            {/* IMAGE SECTION WEYE */}
            <div className=" flex w-full max-w-[1550px] items-center justify-between border border-red-600 lg:mx-5 ">
                <div className=" flex h-[55px] w-[110px] border border-b-cyan-700  items-center justfiy-center overflow-hidden">
                    <img src="./logo.png" alt="logo of the image" />
                </div>
                {/* NAV LINKS */}
                {/* <ul className="flex gap-4 items-center justify-center ">
                    <li className=" font-semibold" ><Link to={'/'}>Home </Link></li>
                    <li className="font-semibold" ><Link to={'/About'}>About </Link></li>
                    <li className="font-semibold px-4 py-2 bg-slate-500 rounded-xl hover:bg-slate-700 hover:text-cyan-100 " > <Link to={'/Login'}>Login </Link></li>
                    <li className="font-semibold  px-4 py-2 bg-slate-500 rounded-xl  hover:bg-slate-700 hover:text-cyan-100 " ><Link to={'/Signup'}>Signup </Link></li> 
            </ul>*/}
                <div className=" flex gap-3.5 items-center justify-center">
                    <Link to={'/'} className=" font-semibold  hover:text-slate-700  ">Home</Link>
                    <Link to={'/'} className=" font-semibold  hover:text-slate-700 "    >About</Link>
                    {/*<Link to={'/'}>
                        <button className="font-semibold px-4 py-2 bg-slate-500 rounded-xl hover:bg-slate-700 hover:text-cyan-100 ">Login</button></Link>
                    <Link to={'/'}>
                        <button className="font-semibold px-4 py-2 bg-slate-500 rounded-xl hover:bg-slate-700 hover:text-cyan-100 " >Signup</button></Link> */}


                    <Link to={'/'}>
                        <CgSearchLoading className=" text-3xl  hover:text-slate-700" />
                    </Link>
                    <Link to={'/'}>
                        <RxUpload className=" text-3xl  hover:text-slate-700 " />
                    </Link>
                    <Link to={'/'}>
                        <button className="font-semibold px-4 py-2 bg-slate-500 rounded-xl hover:bg-slate-700 hover:text-cyan-100 ">Profile</button></Link>
                    <Link to={'/'}>
                        <button className="font-semibold px-4 py-2 bg-slate-500 rounded-xl hover:bg-slate-700 hover:text-cyan-100 " >Logout</button></Link>
                </div>
            </div>
        </header >
    )
}