import React from "react";
import logo from "../assets/logo.png";
import smallLogo from "../assets/smallLogo.png";

function Footer({ className }) {
  return (
    <footer className="text-sm pb-[104px] md:pb-5 pt-10 dark:bg-main-900 text-center dark:text-main-100">
      <hr className="bg-main-700 mb-3 h-[2px]" />

      <div className="mx-5 md:flex justify-between items-center md:text-lg">
        <p className={`lg:${className}`}>All Right Reserved &copy; 2025</p>

        <div className="text-center mt-2 flex items-center justify-center gap-5">
          <p>Powered by </p>
          <div className="flex items-center justify-center gap-2">
            <img src={smallLogo} alt="" className="w-10 h-10" />
            <img src={logo} alt="" className="w-full h-4" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
