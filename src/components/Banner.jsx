"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function HeroSection() {
  return (
    <div className="lg:container mx-auto w-full  py-6">
      {/* Main Banner */}
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 ">
        {/* Swiper Carousel */}
        <div className="md:col-span-2">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000 }}
            loop
            className="rounded-lg overflow-hidden"
          >
            <SwiperSlide>
              <div className="relative">
                <img
                  src="/Perfumance-Cover-Photo.webp"
                  alt="Journals"
                  className="w-full h-[515px] object-cover"
                />
                {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center p-6">
                  <h2 className="text-white text-3xl font-bold">JOURNALS</h2>
                  <p className="text-white mt-2">
                    High-quality dotted paper, excellent for bullet journaling
                  </p>
                  <button className="mt-4 bg-green-800 text-white px-5 py-2 rounded-md">
                    Shop Now
                  </button>
                </div> */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img
                  src="/perfumance-fb-coverpic.jpg"
                  alt="New Arrival"
                  className="w-full h-[515px] object-cover"
                />
                {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center p-6">
                  <h2 className="text-white text-3xl font-bold">New Arrival</h2>
                  <p className="text-white mt-2">Check out our latest product</p>
                  <button className="mt-4 bg-green-800 text-white px-5 py-2 rounded-md">
                    Explore
                  </button>
                </div> */}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Side Banners */}
        <div className="flex lg:flex-col w-full  gap-4">
          {/* New Arrival */}
          <div className="relative">
            <img
              src="/perfumancce-banner-3.jpg"
              alt="New Arrival"
              className="w-full h-[250px] rounded-lg"
            />
            {/* <div className="absolute inset-0 flex flex-col justify-center p-4 text-white bg-black bg-opacity-50">
              <h3 className="text-lg font-semibold">New Arrival</h3>
            </div> */}
          </div>

          {/* Free Shipping */}
          <div className="relative">
            <img
              src="/perfumance-banner-2.jpg"
              alt="Free Shipping"
              className="w-full h-[250px] rounded-lg"
            />
            {/* <div className="absolute inset-0 flex flex-col justify-center p-4 text-black">
              <h3 className="text-xl font-bold">FREE SHIPPING</h3>
              <p className="text-sm">On Gold Foiled Notebooks priced at 499 or above!</p>
              <button className="mt-2 bg-green-800 text-white px-4 py-1 rounded-md">
                Order Now
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
