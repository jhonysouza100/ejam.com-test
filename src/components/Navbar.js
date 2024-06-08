import {  RiArrowLeftSLine, RiArrowRightSLine, RiCheckboxCircleLine } from "@remixicon/react";
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import SwiperJS from "./Swiper";

function Navbar() {

  return (
    <header className="header bg-body text-body text-xs">
      <div className="bg-slate-700 w-screen container mx-0 px-2 sm:px-4 lg:px-20 max-w-[10000px]">
        <nav className="navmenu py-2 top-0 container mx-auto max-w-[10000px] flex justify-center lg:justify-between items-center">
          <SwiperJS className="container" />
         
        </nav>
      </div>
    </header>
  );
}

export default Navbar;