import {  RiArrowLeftSLine, RiArrowRightSLine, RiCheckboxCircleLine } from "@remixicon/react";
import Image from "next/image";

function Navbar() {

  return (
    <header className="header bg-body text-body text-xs w-screen">
      <div className="bg-slate-700">
        <nav className="navmenu py-2 top-0 container mx-auto max-w-72 flex justify-between items-center">
          <RiArrowLeftSLine className="w-5 h-5" />
          <div className="text- text-nowrap">
            <span className="flex gap-1 items-center"><RiCheckboxCircleLine className="w-5 h-5" />30-DAY SATISFACTION GUARANTEE</span>
          </div>
          <RiArrowRightSLine className="w-5 h-5" />
        </nav>
      </div>
      <div className="header-content container px-4 py-4 text-main flex items-center justify-between">
        <Image src={'/images/logo-image.png'} width={100} height={50} alt="clarifion logo" />
        <div className="flex justify-center items-center gap-2">
          <Image src={'/images/mcafee-logo.png'} width={80} height={80} alt="macfee logo" />
          <Image src={'/images/norton-logo.png'} width={50} height={50} alt="norton logo" />
        </div>
        
      </div>
    </header>
  );
}

export default Navbar;