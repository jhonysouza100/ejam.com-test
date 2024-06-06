import { RiLockLine } from "@remixicon/react";

function Footer() {
  return (
    <footer className="px-4 py-6 bg-slate-700 text-body font-extralight text-center text-wrap text-[.75rem]">
      Copyright (C) 2023 | clarifionsupport@clarifion.com
      <span className="flex items-center gap-2 justify-center py-4"><RiLockLine className="w-4" />Secure 256-Bit SSL Encryption.</span>
    </footer>
  );
}

export default Footer;