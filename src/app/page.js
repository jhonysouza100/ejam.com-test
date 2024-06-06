import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { RiCheckboxCircleFill, RiNumber3, RiNumber4 } from "@remixicon/react";
import Image from "next/image";

function page() {
  return (
    <>
      <Navbar />
      <main className="container px-4 bg-body text-main">
        <section className="text-wrap py-8 space-y-2">
          <h1 className="text-2xl font-semibold text-center">Wait! Your Order In Progress.</h1>
          <p className="text-sm text-center text-zinc-600">Lorem Impsum Dolor Amet, Consectetur Adipscing</p>
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
          <div className="grid grid-cols-3 gap-x-4">
            <Image  className="col-span-1 py-2 bg-blue-600 rounded-xl" src='/images/main-image.webp' width={100} height={100} alt="clarifion image" />
            <div className="col-span-2 flex-col items-end justify-between">
              <span className="text-nowrap">Clarifion Air lonizer <span className="text-zinc-600 text-xs">$180 <span className="text-blue-600 text-sm">$84</span></span></span>
              <div></div>
              <span></span>
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