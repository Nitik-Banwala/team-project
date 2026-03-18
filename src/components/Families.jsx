import Heading from "../components/common/Heading";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Icons from "./common/Icons";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { FAMILIES_DATA_LIST } from "../utils/helper";

const Families = () => {
  const swiperRef = useRef(null);

  return (
    <div className="max-w-330 w-full mx-auto flex flex-col gap-10 items-center px-4 mt-20">
      <Heading text={"Hear What Families Say About Pupilo"} />
      <div className="max-w-312 w-full relative px-14 ">
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          spaceBetween={10}
          slidesPerGroup={1}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {FAMILIES_DATA_LIST.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="border border-[#5D61801F] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.06)] rounded-3xl p-6 flex flex-col gap-4 hover:border-purple duration-200 ease-in">
                <Icons icon={"rating"} />
                <p className="leading-[150%]">{item.description}</p>
                <div className="flex gap-3 items-center">
                  <img
                    src={item.image || null}
                    alt={item.image}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <h4 className="text-xl leading-[150%]">{item.name}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Buttons */}
        <>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 border border-black cursor-pointer h-12 w-12 rounded-full flex items-center justify-center duration-200 ease-in hover:text-white hover:border-transparent hover:bg-purple"
          >
            <MdOutlineArrowBackIos className="text-xl" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 border border-black cursor-pointer h-12 w-12 rounded-full flex items-center justify-center duration-200 ease-in hover:text-white hover:border-transparent hover:bg-purple"
          >
            <MdOutlineArrowBackIos className="rotate-180 text-xl" />
          </button>
        </>
      </div>
    </div>
  );
};

export default Families;
