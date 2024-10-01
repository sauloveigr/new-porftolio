import { useState } from "react";
import { MdDehaze } from "react-icons/md";
import { MdClose } from "react-icons/md";

import { Menu } from "./Menu";

export const NavBar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const pageList = ["_hello", "_about-me", "_projects"];
   return (
      <header className="text-primary-light-grey border-b-2 border-primary-shadow-green w-full text-xl font-body flex items-center justify-between px-4">
         <div className="flex items-center">
            <span className="py-4 lg:pr-36">saulo-veiga</span>
            <div className="hidden lg:flex ">
               {pageList.map((page) => (
                  <span className="px-8 border-x border-primary-shadow-green h-14 flex items-center">
                     {page}
                  </span>
               ))}
            </div>
         </div>
         <button
            className="cursor-pointer p-2 z-10"
            onClick={() => {
               setIsMenuOpen(!isMenuOpen);
            }}
         >
            {isMenuOpen ? (
               <MdClose className="sm:hidden block fill-primary-light-grey" />
            ) : (
               <MdDehaze className="sm:hidden block fill-primary-light-grey" />
            )}
         </button>
         {isMenuOpen && <Menu />}
         <span className="hidden pl-6 border-l border-primary-shadow-green h-14 lg:flex items-center">
            _contact-me
         </span>
      </header>
   );
};
