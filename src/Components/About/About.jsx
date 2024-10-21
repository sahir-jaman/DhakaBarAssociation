// import React from 'react'
import { FooterIcon } from "flowbite-react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

import corporateImage from "../../assets/images/corporate.jpg";
import Main_footer from "../Footer/Main_footer";
import Search_notice from "../Members/Search_notice";

function About() {
  return (
    <div>
      <h1 className="text-2xl max-w-[90%] mx-auto px-2">
        About Actor Link Association
      </h1>
      <div className="max-w-[90%] mx-auto lg:flex">
        <div className="first px-2 py-2 lg:w-4/5 mr-4 bg-[#ECECEB]">
          <div className="h-[400px] w-[500px] rounded-lg overflow-hidden">
            <img
              className="h-full w-full object-fill"
              src={corporateImage}
              alt="corporate people"
            />
          </div>
          <div className="pt-4">
            <p className="text-justify">
            Actor Link Association (ALC) stands as a pioneering platform for the creative industry, bridging the gap between actors and directors across the globe. Since its inception, ALC has played a crucial role in promoting the artistic exchange and collaboration necessary for the entertainment world to thrive. Like Dhaka Bar Association's contribution to justice, ALC fosters talent, offering actors—from seasoned professionals to emerging talents—an opportunity to connect directly with directors, streamlining casting processes and nurturing creative partnerships.

            Committed to excellence, ALC ensures that every actor has the platform to showcase their talent, while directors can access diverse profiles to match their project needs. Much like the historical significance of cultural movements, ALC plays a vital role in driving innovation within the entertainment industry, supporting the growth of both local and international projects, and advocating for creative freedom and expression.
            </p>
            <div className=" pt-5">
              <h1 className="text-lg mb-1 text-blue-600">Share Now</h1>
              <div className="flex gap-2">
                <FooterIcon href="#" icon={BsFacebook} />
                <FooterIcon href="#" icon={BsInstagram} />
                <FooterIcon href="#" icon={BsTwitter} />
              </div>
            </div>
          </div>
        </div>
        <div className="second lg:w-1/5">
          <Search_notice />
        </div>
      </div>
      <div>
        <Main_footer />
      </div>
    </div>
  );
}

export default About;
