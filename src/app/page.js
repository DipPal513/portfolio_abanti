import Banner from "@/components/Banner/Banner";
import Header from "@/components/Header/Header";
import Image from "next/image";
import { cormorant, syne } from "./layout";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Home() {
  return (
    <>
      <Banner />
      {/* --- next part */}
      <div className="">
       <div className="ps-3">
       <h3 className={`${syne.className}`}>
          <span className="text-xl">F I N D&nbsp;&nbsp;M E <br />
            O N&nbsp;&nbsp;I N S T A G R A M</span></h3>
        <p className={`${cormorant.className} text-lg`}>
          Follow me and stay updated
          <br />
          on latest updates and releases
        </p>
        <button className={`${cormorant.className} flex items-center my-2 text-lg underline`}><span>take a look</span> <MdOutlineKeyboardArrowRight /></button>
      </div>
        <img src="https://images.pexels.com/photos/3246665/pexels-photo-3246665.png?auto=compress&cs=tinysrgb&w=600" alt="art image" />
       </div>

    </>
  );
}
