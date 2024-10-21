
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";

const heroData = [
  {
    title: "Join the Actor Link Community",
    description: "Become part of a vibrant community that champions creativity and collaboration in the film industry. Together, we can create magic on screen! At Actor Link, we foster an inclusive environment where artists can connect, collaborate, and grow together. Our community is built on mutual support, sharing knowledge, and celebrating achievements. Participate in workshops, networking events, and discussions that inspire and empower you to reach your creative goals. Together, we can create magic on screen and redefine storytelling in cinema.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Unleashing Talent: The Next Generation of Actors",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptatum quos incidunt sit necessitatibus praesentium aut architecto eligendi inventore id.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptatum quos incidunt sit necessitatibus praesentium aut architecto eligendi inventore id.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptatum quos incidunt sit necessitatibus praesentium aut architecto eligendi inventore id.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptatum quos incidunt sit necessitatibus praesentium aut architecto eligendi inventore id.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptatum quos incidunt sit necessitatibus praesentium aut architecto eligendi inventore id.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptatum quos incidunt sit necessitatibus praesentium aut architecto eligendi inventore id.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptatum quos incidunt sit necessitatibus praesentium aut architecto eligendi inventore id.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptatum quos incidunt sit necessitatibus praesentium aut architecto eligendi inventore id. id.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptatum quos incidunt sit necessitatibus praesentium aut architecto eligendi inventore id.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptatum quos incidunt sit necessitatibus praesentium aut architecto eligendi inventore id.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptatum quos incidunt sit necessitatibus praesentium aut architecto eligendi inventore id.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptatum quos incidunt sit necessitatibus praesentium aut architecto eligendi inventore id.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptatum quos incidunt sit necessitatibus praesentium aut architecto eligendi inventore id",
    image:
      "https://images.unsplash.com/photo-1559613671-dfe2fb6a7680?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title:"Government controlling media by different ways",
    description:"The government is controlling the media in various ways. The mainstream media that are trying to work impartially are being subjected to various obstacles. Freedom of media could not be ensured if rule of law is not established through a fair election in the country. The government is controlling the media in various ways. The mainstream media that are trying to work impartially are being subjected to various obstacles. Freedom of media could not be ensured if rule of law is not established through a fair election in the country. The government is controlling the media in various ways. The mainstream media that are trying to work impartially are being subjected to various obstacles. Freedom of media could not be ensured if rule of law is not established through a fair election in the country.",
    image:
      "https://images.unsplash.com/photo-1649365245062-c9db4054c845?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];

function Slider() {
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
            <SwiperSlide key={index} className="sm:w-full md:flex lg:flex h-full md:h-[470px] lg:h-[450px] justify-between">
              <div className="w-full md:w-[55%] lg:w-[55%] h-[380px] lg:h-100% lg:ml-6">
                <img src={item.image} className="w-full md:w-[900px] lg:w-[900px] h-[380px] md:h-[470px] lg:h-[450px] object-cover" alt="slider image"/>
              </div>
              <div className="p-8 flex items-center w-full md:w-[45%] lg:w-[45%]">
                <div className="">
                  <h2 className="text-2xl lg:text-3xl font-bold my-6 leading-normal">
                    {item.title}
                  </h2>
                  <p className="lg:text-[18px] text-[16px] text-justify">{item.description.slice(0, 380)} <span className="text-[#007bff]"> read more...</span></p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default Slider