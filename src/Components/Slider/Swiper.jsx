// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";

const heroData = [
  {
    title: "BPA President paid courtesy call on Finance Minister",
    description:"The Annual General Meeting (AGM 2022-2023) of the Federation of Bangladesh Chambers of Commerce and Industry (BPA) was held on December 09, 2023 at the Bangamata Sheikh Fazilatunnesa Mujib Convention Hall in the capital. BPA President Mr. Mahbubul Alam Presided over the meeting The Annual General Meeting (AGM 2022-2023) of the Federation of Bangladesh Chambers of Commerce and Industry (BPA) was held on December 09, 2023 at the Bangamata Sheikh Fazilatunnesa Mujib Convention Hall in the capital. BPA President Mr. Mahbubul Alam Presided over the meeting The Annual General Meeting (AGM 2022-2023) of the Federation of Bangladesh Chambers of Commerce and Industry (BPA) was held on December 09, 2023 at the Bangamata Sheikh Fazilatunnesa Mujib Convention Hall in the capital. BPA President Mr. Mahbubul Alam Presided over the meeting",
    image:
      "https://images.pexels.com/photos/3374204/pexels-photo-3374204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Politics for some, Economy for all: BPA President at Annual General Meeting",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptatum quos incidunt sit necessitatibus praesentium aut architecto eligendi inventore id.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptatum quos incidunt sit necessitatibus praesentium aut architecto eligendi inventore id.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptatum quos incidunt sit necessitatibus praesentium aut architecto eligendi inventore id.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptatum quos incidunt sit necessitatibus praesentium aut architecto eligendi inventore id.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptatum quos incidunt sit necessitatibus praesentium aut architecto eligendi inventore id.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptatum quos incidunt sit necessitatibus praesentium aut architecto eligendi inventore id.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptatum quos incidunt sit necessitatibus praesentium aut architecto eligendi inventore id.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptatum quos incidunt sit necessitatibus praesentium aut architecto eligendi inventore id. id.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptatum quos incidunt sit necessitatibus praesentium aut architecto eligendi inventore id.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptatum quos incidunt sit necessitatibus praesentium aut architecto eligendi inventore id.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptatum quos incidunt sit necessitatibus praesentium aut architecto eligendi inventore id.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptatum quos incidunt sit necessitatibus praesentium aut architecto eligendi inventore id.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptatum quos incidunt sit necessitatibus praesentium aut architecto eligendi inventore id",
    image:
      "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "BPA President Meets Dubai Chamber President",
    description:
      "Businesses and Entrepreneurs of the United Arab Emirates (UAE) are interested in investing in Bangladesh and hiring skilled manpower from the country. Mahbubul Alam, the President of the Federation of Bangladesh Chambers of Commerce and Industry (BPA), the apex trade organization of the country, assures all kinds of support to the investors of UAE in this regard. Mahbubul Alam, President of the BPA, and Mohammad Ali Rashed Lootah, President and CEO of the Dubai Chamber of Commerce discussed the issues during a meeting held recently in Dubai, UAE. The discussions revolved around enhancing economic collaboration between Bangladesh and the United Arab Emirates (UAE). Businesses and Entrepreneurs of the United Arab Emirates (UAE) are interested in investing in Bangladesh and hiring skilled manpower from the country. Mahbubul Alam, the President of the Federation of Bangladesh Chambers of Commerce and Industry (BPA), the apex trade organization of the country, assures all kinds of support to the investors of UAE in this regard. Mahbubul Alam, President of the BPA, and Mohammad Ali Rashed Lootah, President and CEO of the Dubai Chamber of Commerce discussed the issues during a meeting held recently in Dubai, UAE. The discussions revolved around enhancing economic collaboration between Bangladesh and the United Arab Emirates (UAE).",
    image:
      "https://fbcci.org/public/storage/upload/slider/240128072306-8770.png",
  },
  {
    title:"Government controlling media by different ways",
    description:"The government is controlling the media in various ways. The mainstream media that are trying to work impartially are being subjected to various obstacles. Freedom of media could not be ensured if rule of law is not established through a fair election in the country. The government is controlling the media in various ways. The mainstream media that are trying to work impartially are being subjected to various obstacles. Freedom of media could not be ensured if rule of law is not established through a fair election in the country. The government is controlling the media in various ways. The mainstream media that are trying to work impartially are being subjected to various obstacles. Freedom of media could not be ensured if rule of law is not established through a fair election in the country.",
    image:
      "https://images.unsplash.com/photo-1649365245062-c9db4054c845?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];

export default function App() {
  return (
    <>
      <div className="container mx-auto">
        <Swiper
          navigation={true}
          modules={[Navigation, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
        >
          {heroData.map((item, index) => (
            <SwiperSlide
              key={index}
              className=" block sm:w-full md:flex lg:flex h-full md:h-[470px] lg:h-[600px] justify-between"
            >
              <div className="w-full md:w-[55%] lg:w-[55%] h-[380px] lg:h-100% lg:ml-6">
                <img
                  src={item.image}
                  className="w-full md:w-[900px] lg:w-[900px] h-[380px] md:h-[470px] lg:h-[600px] object-cover"
                  alt=""
                />
              </div>
              <div className="p-8 flex items-center w-full md:w-[45%] lg:w-[45%]">
                <div className="">
                  <h2 className="text-2xl lg:text-4xl font-bold my-6 leading-normal">
                    {item.title}
                  </h2>
                  <p className="text-[23px] text-justify">{item.description.slice(0, 380)} <span className="text-[#007bff]"> read more...</span></p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
