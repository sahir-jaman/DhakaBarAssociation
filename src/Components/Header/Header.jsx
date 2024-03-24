import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import DesktopNavbar from "./helpers/DesktopNavbar";
import MobileNavbar from "./helpers/MobileNavbar";

const menuOptions = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    children: [
      {
        title: "About BPA",
        link: "/about-bpa",
      },
      {
        title: "Constitution",
        link: "/constitution",
      },
    ],
  },
  {
    title: "Organization",
    link: "organization",
  },
  {
    title: "Events",
    link: "/events",
  },
  {
    title: "Broadcast Fair",
    link: "/broadcast-fair",
  },
  {
    title: "Media",
    link: "/media",
  },
  {
    title: "Members",
    children: [
      {
        title: "All Members",
        link: "/all-members",
      },
      {
        title: "Membership Form",
        link: "/membership-form",
      },
    ],
  },
  {
    title: "Professional Development",
    children: [
      {
        title: "Relations",
        link: "/relations",
      },
      {
        title: "Travel",
        link: "/travel",
      },
    ],
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const socialLinks = [
  {
    icon: <FaFacebookSquare className="text-white text-[25px] pt-2 hover:text-[red]" />,
    link: "facebook-link",
  },
  {
    icon: <FiInstagram className="text-white text-[25px] pt-2 hover:text-[red]" />,
    link: "instagram-link",
  },
  {
    icon: <FaTwitter className="text-white text-[25px] pt-2 hover:text-[red]" />,
    link: "twitter-link",
  },
  {
    icon: <FaLinkedin className="text-white text-[25px] pt-2 hover:text-[red]" />,
    link: "linkedin-link",
  },
  {
    icon: <FaYoutube className="text-white text-[25px] pt-2 hover:text-[red]" />,
    link: "youtube-link",
  },
];

function Header() {
  return (
    <header>
      <div id="usefulLinks" className="h-[40px] bg-[#171C49]">
        <div className="max-w-[90%] mx-auto flex justify-between">
          <h3 className="text-white lg:text-[20px] text-[10px] lg:pt-[0px] pt-2 lg:font-bold">
            Broadcast Producers Association
          </h3>
          <div id="links" className="flex gap-3 my-auto ">
            {/* Mapping social media icons and links */}
            {socialLinks.map((socialLink, index) => (
              <a key={index} href={socialLink.link} className="hover:text-[red]">
                {socialLink.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <DesktopNavbar menuOptions={menuOptions} />
      </div>
      <div className="lg:hidden block">
        <MobileNavbar menuOptions={menuOptions} />
      </div>
    </header>
  );
}

export default Header;
