import { HiOutlineGlobeAlt } from "react-icons/hi";
import { IoIosArrowUp } from "react-icons/io";
import { BsMapFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer
      className="fixed bottom-0   body-medium items-center w-[100%]
    "
    >
      <div className=" flex justify-center mb-10">
        <button className=" rounded-full bg-black-10  text-white items-center p-4 flex">
          Show map <BsMapFill className="ml-2 "  />
        </button>
      </div>

      <div className="flex justify-between bg-white border-t border-neutral  py-4 px-8 ">
        <div className="flex">
          <p>&copy; 2022 Airbnb, inc, . </p>

          {/* <p>.</p>  */}
          <a href="#" className="pl-2 pr-2">
            {" "}
            Privacy
          </a>
          <p>.</p>
          <a href="#" className="pl-2 pr-2">
            Terms
          </a>
          <p>.</p>
          <a href="#" className="pl-2 pr-2">
            Sitemap
          </a>
          <p>.</p>
          <a href="#" className="pl-2">
            Destinations
          </a>
        </div>
        <div className="flex font-semibold">
          <div className=" pr-2">
            <HiOutlineGlobeAlt size={20} />
          </div>

          <a href="#" className="pr-4">
            English(US)
          </a>
          <p className="pr-2">$</p>
          <a href="#" className="pr-4">
            USD
          </a>
          <a href="#" className="pr-2">
            Support&resources
          </a>
          <IoIosArrowUp size={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
