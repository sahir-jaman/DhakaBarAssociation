import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Slider() {
  return (
    <div className='w-full bg-[#171C49]'>
      <div className='w-full mx-auto'>
        <Carousel showArrows showIndicators showThumbs={false} autoPlay>
          <div>
            <img src='https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg' alt='First slide' />
          </div>
          {/* Add more Carousel items for additional slides */}
          <div>
            <img src='https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg' alt='First slide' />
          </div>
        </Carousel>
        
      </div>
    </div>
  );
}

export default Slider;
