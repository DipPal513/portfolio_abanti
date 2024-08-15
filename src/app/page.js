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
          <p className={`${cormorant.className} text-xl mt-2`}>
            Follow me and stay updated
            <br />
            on latest updates and releases
          </p>
          <button className={`${cormorant.className} flex items-center my-2 text-lg underline`}><span>take a look</span> <MdOutlineKeyboardArrowRight /></button>
        </div>
        <img src="https://images.pexels.com/photos/3246665/pexels-photo-3246665.png?auto=compress&cs=tinysrgb&w=600" alt="art image" />

        <h3 className={`${syne.className} text-center mt-5`}>
          <span className="text-xl">S U B S C R I B E&nbsp;&nbsp; T O &nbsp;&nbsp;M Y </span><br /><br />
          <span className="text-xl">C O L L E C T O R&nbsp;&nbsp;P R E V I E W</span></h3>
        <div id="comp-lt0ubdmx1" className="MpKiNN comp-lt0ubdmx1 wixui-text-input qzvPmW lPl_oN ps-7 py-5">
          <label for="input_comp-lt0ubdmx1" className={`${syne.className} wPeA6j wixui-text-input__label text-lg`}>Email*</label>
          <div className="pUnTVX">
            <input name="email" id="input_comp-lt0ubdmx1" className="KvoMHf has-custom-focus wixui-text-input__input" type="email" placeholder="e.g., email@example.com" required="" aria-required="true" aria-invalid="true" pattern="^.+@.+\.[a-zA-Z]{2,63}$" maxlength="250" autocomplete="off" value="" />
          </div>
        </div>
      </div>

    </>
  );
}
