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
        About Broadcast Producers Association
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
              The Dhaka Bar Association is one of the leading & renounced Bar
              Association. After getting the establishment in 28 January 1889
              A.D. It is holdings an important role up to date to establish the
              rules of law and establish the perfect or accurate judgment in
              between of facing to much difficulties. This association created
              the specie role to remain sighing of Bangladesh at the
              international world. This bar association make the role of
              forwardness against each & every works of interest individually.
              Besides this all of Gono Andolon. This bar association fail on the
              road and play the role to get the legal rights as faster. The role
              of Dhaka Bar Association at the period of Vasa Andolon in the year
              of 1952 A.D. was various glorious. Except this, the learned
              members of this association participated in the ware of 1971 A.D.
              as freedom-fighter which are supported by the learned advocates of
              this association were given veto as firstly safe from the black
              hands of the country and the hands from the enemy of the abroad.
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
