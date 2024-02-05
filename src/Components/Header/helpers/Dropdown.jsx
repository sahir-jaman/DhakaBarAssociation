/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function DropDown({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      key={item.title}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <a className="flex gap-1 items-center" to={item.link}>
        {item.title}{" "}
        {item.children &&
          (isHovered ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />)}
      </a>
      {item.children && isHovered && (
        <ul
          className="absolute top-full left-0 bg-blue-900 shadow-lg p-2"
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
