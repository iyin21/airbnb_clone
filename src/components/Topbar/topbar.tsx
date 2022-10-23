import Logo from "../../assets/icons/logo.svg"
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { IoIosMenu } from "react-icons/io";
import Search from "../../assets/icons/search.svg"
import Avatar from "../../assets/icons/avatar.svg";
import  "./topbar.css";

const Topbar =()=>{
    return(
       <nav className="flex justify-between py-4 px-12 items-center  border-b border-neutral mb-4">
        <a href=""><img src={Logo} alt="" /></a>
        <div className="flex border border-neutral rounded-full py-3 px-2 shadow-gray-50 shadow-lg items-center">
            <a href="" className="font-semibold border-r border-neutral pl-2 pr-3">Anywhere</a>
            <a href="" className="font-semibold border-r border-neutral pr-3 pl-3">Any week</a>
            <a href=""  className="pr-2 pl-2 text-black-20">Add guests</a>
            <div className="text-white bg-red rounded-full p-2" ><IoSearchSharp size={15}  color="white" /></div>
            
        </div>
        <div className="flex items-center">
            <a href="">Become a Host</a>
            <div className="pl-6"><HiOutlineGlobeAlt /></div>

            <div className="flex rounded-full border border-neutral py-1 pr-1 pl-2 ml-4 items-center">
                <IoIosMenu size={25}/>
                <img src={Avatar} alt="" className="pl-2"/>
            </div>
        </div>
       </nav>  
    )
}

export default Topbar