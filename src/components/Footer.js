import { RiLockLine } from "@remixicon/react";

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-6 bg-slate-700 text-body font-extralight text-center text-wrap text-[.75rem]">
      <div>Copyright (C) 2023 | clarifionsupport@clarifion.com</div>
      <span className="flex items-center gap-2 justify-center md:py-0"><RiLockLine className="w-4 h-4" />Secure 256-Bit SSL Encryption.</span>
    </footer>
  );
}

export default Footer;