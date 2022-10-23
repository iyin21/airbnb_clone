import { NavLink } from "react-router-dom";
import { navbarRoutes } from "./utils/routes";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Filter from "../../assets/icons/filter.svg";
import { useState } from "react";
import FilterModal from "../FilterModal/filterModal";

const Navbar = () => {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <>
      {showFilters && (
        <FilterModal openModal={showFilters} setOpenModal={setShowFilters} />
      )}
      <nav className="flex body-regular  border-b border-neutral pb-2 shadow-gray-50 shadow-lg px-8">
        {/* <ul> */}
        <Carousel
          additionalTransfrom={0}
          centerMode={false}
          shouldResetAutoplay={false}
          containerClass="container"
          //itemClass="pl-4"
          partialVisible={true}
          customLeftArrow={
            <button
              type="button"
              className="border border-neutral absolute shadow-default mr-10  w-8 h-8 rounded-full flex items-center justify-center bg-white"
            >
              <BiChevronLeft color="black" size={22} />
            </button>
          }
          customRightArrow={
            <button
              type="button"
              className="border border-neutral absolute shadow-default  right-0 w-8 h-8 rounded-full flex items-center justify-center bg-white"
            >
              <BiChevronRight color="black" size={22} />
            </button>
          }
          draggable={true}
          swipeable={true}
          focusOnSelect={false}
          keyBoardControl
          renderButtonGroupOutside={true}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 11,
              partialVisibilityGutter: 10,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 2,
              partialVisibilityGutter: 10,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 600,
              },
              items: 6,
              partialVisibilityGutter: 10,
            },
          }}
          showDots={false}
          slidesToSlide={2}
        >
          {navbarRoutes.map((item, index) => (
            <div key={index} className="">
              <NavLink
                to={item.route}
                className="flex justify-center flex-col place-items-center"
              >
                {<item.icon className="mb-2" size="20px" />}

                {item.title}
              </NavLink>
            </div>
          ))}
        </Carousel>
        {/* </ul> */}

        <button
          className="border border-neutral rounded-md px-4 h-10  ml-6 flex items-center font-semibold"
          onClick={() => setShowFilters(true)}
        >
          <img src={Filter} alt="" className="pr-2" />
          Filters
        </button>
      </nav>
    </>
  );
};

export default Navbar;
