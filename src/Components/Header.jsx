import React, { useState } from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

import Dropdown from './Dropdown';
import MenuOverLay from './MenuOverLay';

// const menuItems = [
//     {
//         title: "home",
//         link: "home"
//     },
//     {
//         title: "Broadcast Fair",
//         link: 
//     }
// ]

function Header() {
    const [toogle, toogleState] = useState(true)

  return (
    <div id='root_div'>
        <header>
            <div id='usefulLinks' className='h-[40px] bg-[#171C49]'>
                <div className='max-w-[90%] mx-auto flex justify-between'>
                    <h3 className='text-white lg:text-[20px] text-[10px] lg:pt-[0px] pt-2 lg:font-bold'>Broadcast Producers Association</h3>
                    <div id="links" className='flex gap-3 my-auto'>
                        <FaFacebookSquare className='text-white text-[25px] pt-2'/>
                        <FiInstagram className='text-white text-[25px] pt-2'/>
                        <FaTwitter className='text-white text-[25px] pt-2'/>
                        <FaLinkedin className='text-white text-[25px] pt-2'/>
                        <FaYoutube className='text-white text-[25px] pt-2'/>
                    </div>
                </div>
            </div>
            <div id='intro' className='hidden lg:block w-full h-[120px] bg-[#F7F7F7]'>
                <div className='max-w-[90%] mx-auto flex justify-between'>
                    <img src="https://www.bpa-bd.com/frontend/assets/images/logo.png" alt="" className='h-[80px] pt-5'/>
                    <h1 className='max-w-[450px] text-center pt-5 font-bold text-[20px]'>THE FEDERATION OF BANGLADESH CHAMBERS OF COMMERCE & INDUSTRY</h1>
                    <img src="https://fbcci.org/public/storage/upload/conf/230626102847-15065.jpeg" alt="" className='h-[80px] pt-5'/>
                </div>
            </div>
            <div id='navigationbar' className=' bg-[#171C49]'>
                <nav className='max-w-[90%] mx-auto flex justify-between py-6 text-[21px]'>
                    <ul className='hidden lg:flex text-white gap-6'>
                        <li className='mt-1.5 cursor-pointer hover:text-[red] -mr-4'>Home</li>
                        {/* <li className='ml-[-104px]'><Dropdown menuName={"Professional Development"} menuList={["Relations", "Travel"]}/></li> */}
                        <li className=''><Dropdown menuName={"About Us"} menuList={["About BPA","Constitution", "Organization"]}/></li>
                        <li className='mt-2 hover:text-[red] -ml-4'>Broadcast Fair</li>
                        <li className='mt-2 hover:text-[red]'>Events</li>
                        <li className='mt-2 hover:text-[red]'>Media</li>
                        <li className='w-[200px] -ml-4'><Dropdown menuName={"Members"} menuList={["All Members", "Membership Form"]}/></li>
                        <li className='ml-[-104px]'><Dropdown menuName={"Professional Development"} menuList={["Relations", "Travel"]}/></li>
                        <li className='mt-2 hover:text-[red] -ml-4'>Contact</li>
                    </ul>
                    <div className='lg:hidden h-[60px]'>
                        <img className='w-full h-full' src="https://www.bpa-bd.com/frontend/assets/images/logo.png" alt="" />
                    </div>
                    <div className='lg:hidden pt-3.5' onClick={()=>toogleState(!toogle)}>
                        {toogle===true? <FaBars className='text-white text-[30px]'/>: <RxCross2 className='text-white text-[30px]'/>}
                        {toogle?null : <MenuOverLay/>}
                    </div>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Header