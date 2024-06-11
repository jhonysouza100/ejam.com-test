import {  RiArrowLeftSLine, RiArrowRightSLine, RiCheckboxCircleLine, RiExchangeDollarFill, RiHeartLine, RiTruckLine } from "@remixicon/react";
import Image from "next/image";

function Navbar() {

  return (
    <header className="header bg-body text-body text-xs">
      <div className="bg-slate-700 w-screen container mx-0 px-2 sm:px-4 md:px-14 max-w-[10000px]">
        <nav className="navmenu py-2 top-0 container mx-auto max-w-[10000px] flex justify-between md:justify-around items-center">
          <RiArrowLeftSLine className="w-5 h-5 xl:hidden" />
          <div className="text- text-nowrap">
            <span className="flex gap-1 items-center"><RiCheckboxCircleLine className="w-5 h-5" />30-DAY SATISFACTION GUARANTEE</span>
          </div>
          <div className="text- text-nowrap hidden lg:block">
            <span className="flex gap-1 items-center"><RiTruckLine className="w-5 h-5" />FREE DELIVERY ON ORDERS OVER $40.00</span>
          </div>
          <div className="text- text-nowrap hidden xl:block">
            <span className="flex gap-1 items-center"><RiHeartLine className="w-5 h-5" />50.000 + HAPPY CUSTOMERS</span>
          </div>
          <div className="text- text-nowrap hidden xl:block">
            <span className="flex gap-1 items-center"><RiExchangeDollarFill className="w-5 h-5" />100% MONEY BACK GUARANTEE</span>
          </div>
          <RiArrowRightSLine className="w-5 h-5 xl:hidden" />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;