import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { RiArrowRightLine, RiCheckFill, RiCheckLine, RiLockLine, RiNumber3, RiNumber4, RiPercentLine } from "@remixicon/react";
import Rating from '@mui/material/Rating';
import Image from "next/image";
import { Avatar } from "@mui/material";
import BottomActionsCard from "@/components/Card";

function page() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto sm:min-w-[380px] px-4 md:px-14 bg-body text-main">

      <section className="container py-4 text-main flex items-center justify-between">
        <Image src={'/images/logo-image.png'} width={100} height={50} alt="clarifion logo" />
        <div className="flex justify-center items-center gap-2">
          <Image src={'/images/mcafee-logo.png'} width={80} height={80} alt="macfee logo" />
          <Image src={'/images/norton-logo.png'} width={50} height={50} alt="norton logo" />
        </div>
      </section>
      
        <section className="text-wrap py-4 space-y-2">
          <h1 className="text-2xl md:text-4xl font-medium text-center">Wait! Your Order In Progress.</h1>
          <p className="text-sm md:text-base text-center text-zinc-500">Lorem Ipsum Dolor Sit Amet, Consectetur Adipscing</p>
        </section>

        <section className="container px-4 grid grid-cols-4 gap-x-12 md:py-4">
          <span className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-2"><Avatar className="w-6 h-6 p-1 bg-lime-600"><RiCheckFill className="text-body" /></Avatar><p className="text-center text-nowrap text-[.65rem] md:text-base">Cart Review</p></span>
          <span className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-2"><Avatar className="w-6 h-6 p-1 bg-lime-600"><RiCheckFill className="text-body" /></Avatar><p className="text-center text-nowrap text-[.65rem] md:text-base">Checkout</p></span>
          <span className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-2"><Avatar className="w-6 h-6 p-1 bg-blue-600"><RiNumber3 className="text-body" /></Avatar><p className="text-center text-nowrap text-[.65rem]  md:text-base font-bold">Special Offer</p></span>
          <span className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-2"><Avatar className="w-6 h-6 p-1 border border-blue-600 bg-transparent"><RiNumber4 className=" text-blue-600" /></Avatar><p className="text-center  md:text-base text-nowrap text-[.65rem]">Confirmation</p></span>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-zinc-100 p-2 mb-4">
          {/* ================ LEFT SIDE ================ */}
          <div className="left-side flex flex-col gap-4 items-center justify-between">
            <Image className="w-full md:h-[400px] flex-grow" src={'/images/wallpaper-img.jpg'} width={272} height={272} objectFit="cover" alt="wallpaper image" />
            <BottomActionsCard />
          </div>
          {/* ================ LEFT SIDE ================ */}
          <div className="right-side">
            <section className="text-wrap py-2 space-y-2">
              <h2 className="text-xl font-medium text-center md:text-start">
                <span className="text-blue-600">ONE TIME ONLY</span> Special Price For 6 Extra Clarifion For Only <span className="text-blue-600">$14 Each </span>(84.00 Total!)
              </h2>
            </section>

            <section className="py-2">
              <div className="grid grid-cols-3 gap-x-3">
                <Image  className="col-span-1 py-2 bg-blue-600 rounded-xl" src='/images/main-image.webp' width={100} height={100} alt="clarifion image" />
                <div className="col-span-2 py-2 flex flex-col items-start justify-between">
                  <span className="text-nowrap space-x-3"><span className="-tracking-wide">Clarifion Air lonizer</span><span className="text-zinc-600 text-xs"><span>$180</span> <span className="text-blue-600 text-sm font-semibold">$84</span></span></span>
                  {/* <div className="text-yellow-400 flex"><RiStarFill className="w-3 h-3"/><RiStarFill className="w-3 h-3"/><RiStarFill className="w-3 h-3"/><RiStarFill className="w-3 h-3"/><RiStarFill className="w-3 h-3"/></div> */}
                  <Rating name="size-small" defaultValue={5} size="small" />
                  <span className="text-zinc-500 flex items-center justify-start gap-4"><Avatar className="bg-blue-600 h-4 w-4 border-4 border-blue-200">{` `}</Avatar> <span className="-tracking-wide">12 left in Stock</span></span>
                </div>
              </div>
            </section>

            <section className="py-2">
            <p className="text-xs text-center text-zinc-500 -tracking-wide">Simply plug a Clarifion into any standart outlet and replace bulky, expensive air purifiers with a simple.</p>
            </section>

            <section className="py-2 space-y-2">
              <div className="flex items-center justify-start gap-1"><RiCheckLine className="w-5 h-5 font-semibold text-blue-500" /><p className="text-xs text-start text-zinc-500 -tracking-wide">Next ion Technology may <b>help with allergens</b></p></div>
              <div className="flex items-center justify-start gap-1"><RiCheckLine className="w-5 h-5 font-semibold text-blue-500" /><p className="text-xs text-start text-zinc-500 -tracking-wide">Designed for <b>air rejuvenation</b></p></div>
              <div className="flex items-center justify-start gap-1"><RiCheckLine className="w-5 h-5 font-semibold text-blue-500" /><p className="text-xs text-start text-zinc-500 -tracking-wide"><b>Perfect for every room</b> in all types of places.</p></div>
            </section>

            <section className="py-2">
              <div className="w-full flex items-center justify-start p-3 rounded-md bg-blue-200 gap-2">
                <Avatar className="w-6 h-6 p-1 bg-blue-500"><RiPercentLine className=" text-body" /></Avatar>
                <p className="text-sm -tracking-wide">Save <span className="text-blue-500">53%</span> and get <span className="text-blue-500">6 extra Clarifision</span> for only <span className="text-blue-500">$14 Each.</span></p>
              </div>
            </section>

            <section className="py-2">
              <div className="text-body text-nowrap bg-lime-600 rounded-full w-full p-3 flex items-center justify-center gap-2">
                YES - CLAIM MY DISCOUNT <RiArrowRightLine />
              </div>
            </section>

            <section>
              <div className="p-2 border border-zinc-300 rounded-md space-y-1">
                <div className="flex items-center text-nowrap text-xs space-x-2">
                  <spam className="-tracking-wider">Free Shipping</spam>
                  <span className="after:content-[''] after:h-1 after:border border-zinc-300 rounded-md"></span>
                  <span className="flex items-center gap-2 justify-start">
                    <RiLockLine className="w-4 h-4" />
                    <span className="-tracking-wider">Secure 256-Bit SSL Encryption</span>
                  </span>
                </div>
                <hr className="border border-zinc-300 rounded-md" />
                <div className="flex items-center justify-center">
                  <div className="w-8 h-4 flex items-center overflow-hidden">
                    <Image src={'/images/visa.png'} width={25} height={25} alt="alt logo" />
                  </div>
                  <div className="w-8 h-4 flex items-center justify-center overflow-hidden">
                    <Image src={'/images/opay.png'} width={25} height={25} alt="alt logo" />
                  </div>
                  <div className="w-8 h-4 flex items-center overflow-hidden">
                    <Image src={'/images/paypal.png'} width={25} height={5} alt="alt logo" />
                  </div>
                  <div className="w-8 h-4 flex items-center overflow-hidden">
                    <Image src={'/images/mastercard.png'} width={25} height={25} alt="alt logo" />
                  </div>
                  <div className="w-8 h-4 flex items-center overflow-hidden">
                    <Image src={'/images/gpay.png'} width={25} height={25} alt="alt logo" />
                  </div>
                  <div className="w-8 h-4 flex items-center overflow-hidden">
                    <Image src={'/images/aplepay.png'} width={25} height={25} alt="alt logo" />
                  </div>
                  <div className="w-8 h-8 flex items-center overflow-hidden">
                    <Image src={'/images/amex.png'} width={25} height={25} alt="alt logo" className="object-cover w-full" />
                  </div>
                  
                </div>
              </div>
            </section>

            <section className="py-2 w-full text-center">
              <u className="text-red-600">{`NO THANKS, I DON'T WANT THIS.`}</u>
            </section>

            <section className="pt-4 pb-8">
              <div className="w-full flex items-center justify-start gap-2">
              <Image className="md:w-20 md:h-20" src={'/images/guarantee.png'} width={50} height={50} alt="macfee logo" />
              <p className="text-sm -tracking-wider text-justify">If you completly thrilled with your Clarifion - We have a <b>30 day satisfaction guarantee</b>. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</p>
              </div>
            </section>

          </div>
        </div>

        
        
      </main>
      <Footer />
    </>
  );
}

export default page;