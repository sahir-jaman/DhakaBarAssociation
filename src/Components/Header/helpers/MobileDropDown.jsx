/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function MobileDropDown({ item }) {
  const [isOpened, setIsOpened] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropDown = () => {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpened(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <li key={item.title} ref={dropdownRef} className="relative">
      <a
        onClick={() => toggleDropDown()}
        className="flex gap-1 items-center"
        href={item.link}
      >
        {item.title}{" "}
        {item.children &&
          (isOpened ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />)}
      </a>
      {item.children && isOpened && (
        <ul
          className="bg-blue-900 shadow-lg p-2"
          style={{ minWidth: `${item.title.length * 8}px` }}
        >
          {item.children.map((childItem, index) => (
            <li key={index}>
              <a href={childItem.link}>{childItem.title}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
