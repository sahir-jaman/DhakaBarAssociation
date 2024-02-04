import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import PropTypes from 'prop-types'; 

function Dropdown({menuName, menuList}) {
  const [isHovered, setHoverState] = useState(true);

  return (
    <div className='relative transition-opacity duration-1000 ease-in-out w-auto' onMouseEnter={()=>setHoverState(false)} onMouseLeave={()=>setHoverState(true)}>
        <button className='p-2 text-[20px] text-white hover:text-[red] flex'>
            {menuName} {isHovered? <IoIosArrowDown className='mt-2'/>: <IoIosArrowUp className='mt-2'/>}
        </button>

        {!isHovered && (
           <div className="absolute top-10 w-full z-[9999]">
                <div className='p-2 rounded-b-md bg-red-500'>
                {menuList.map((item) => (
                    <p className="text-white hover:text-[red] cursor-pointer mb-3">{item}</p>
                ))}
                </div>
           </div>)}
    </div>
  );
}

Dropdown.propTypes = {
    menuList: PropTypes.array.isRequired,
  };

export default Dropdown;
