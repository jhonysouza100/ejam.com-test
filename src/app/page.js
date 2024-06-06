import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { RiCheckboxCircleFill, RiNumber3, RiNumber4, RiStarFill } from "@remixicon/react";
import Image from "next/image";

function page() {
  return (
    <>
      <Navbar />
      <main className="container px-4 bg-body text-main">
        <section className="text-wrap py-8 space-y-2">
          <h1 className="text-2xl font-semibold text-center">Wait! Your Order In Progress.</h1>
          <p className="text-sm text-center text-zinc-500">Lorem Impsum Dolor Amet, Consectetur Adipscing</p>
        </section>

        <section className="container px-4 grid grid-cols-4 gap-x-12">
          <span className="flex flex-col justify-center items-center space-y-1"><RiCheckboxCircleFill className="text-lime-600" /><p className="text-center text-nowrap text-[.65rem]">Cart Review</p></span>
          <span className="flex flex-col justify-center items-center space-y-1"><RiCheckboxCircleFill className="text-lime-600" /><p className="text-center text-nowrap text-[.65rem]">Checkout</p></span>
          <span className="flex flex-col justify-center items-center space-y-1"><RiNumber3 className="w-6 h-6 p-1 text-body bg-blue-600 rounded-full" /><p className="text-center text-nowrap text-[.65rem] font-bold">Special Offer</p></span>
          <span className="flex flex-col justify-center items-center space-y-1"><RiNumber4 className="w-6 h-6 p-1 text-blue-600 border border-blue-600 rounded-full" /><p className="text-center text-nowrap text-[.65rem]">Confirmation</p></span>
        </section>
        
        <section className="text-wrap py-8 space-y-2">
          <h2 className="text-xl font-normal text-center">
            <span className="text-blue-600">ONE TIME ONLY</span>
            Special Price For 6 Extra Clarifion For Only <span className="text-blue-600">$14 Each</span>(84.00 Total!)
          </h2>
        </section>

        <section className="py-8">
          <div className="grid grid-cols-3 gap-x-3">
            <Image  className="col-span-1 py-2 bg-blue-600 rounded-xl" src='/images/main-image.webp' width={100} height={100} alt="clarifion image" />
            <div className="col-span-2 py-2 flex flex-col items-start justify-between">
              <span className="text-nowrap space-x-3"><span className="-tracking-wide">Clarifion Air lonizer</span><span className="text-zinc-600 text-xs"><del>$180</del> <span className="text-blue-600 text-sm font-semibold">$84</span></span></span>
              <div className="text-yellow-400 flex"><RiStarFill className="w-3 h-3"/><RiStarFill className="w-3 h-3"/><RiStarFill className="w-3 h-3"/><RiStarFill className="w-3 h-3"/><RiStarFill className="w-3 h-3"/></div>
              <span className="text-zinc-500"><div className="after:contet-[''] after:bg-blue-600 after:w-2 after:h-2 after:rounded-full after:shadow-md after:shadow-blue-300"></div> <span className="-tracking-wide">12 left in Stock</span></span>
            </div>
          </div>
          <div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default page;