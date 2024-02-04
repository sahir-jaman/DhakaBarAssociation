import React from 'react'
import Dropdown from './Dropdown';

function MenuOverLay() {
  return (
    <div>
        <nav className='flex justify-between lg:pt-4 pt-2 text-[21px] bg-[blue]'>
                    <ul className='text-white gap-6'>
                        <li className='mt-1.5 cursor-pointer hover:text-[black]'>Home</li>
                        <li><Dropdown menuName={"About Us"} menuList={["About BPA","Constitution", "Organization"]}/></li>
                        <li className='mt-2 hover:text-[black]'>Broadcast Fair</li>
                        <li className='mt-2 hover:text-[black]'>Events</li>
                        <li className='mt-2 hover:text-[black]'>Media</li>
                        <li><Dropdown menuName={"Members"} menuList={["All Members", "Membership Form"]}/></li>
                        <li><Dropdown menuName={"Professional Development"} menuList={["Relations", "Travel"]}/></li>
                        <li className='mt-1.5 cursor-pointer hover:text-[black]'>Contact</li>
                    </ul>
                    {/* <div id="searchBar">
                        <form className='relative pt-3'>
                            <input type="text" className='bg-[white] rounded-lg'/>
                            <button type="submit" className='absolute right-1 pt-1 text-[24px]'><GoSearch className='font-bold'/></button>
                        </form>
                    </div> */}
                </nav>
    </div>
  )
}

export default MenuOverLay