import { MdDehaze } from "react-icons/md";

export const NavBar = () => {
   const pageList = ["_hello", "_about-me", "_projects"];
   return (
      <header className="text-primary-light-grey border-b-2 border-primary-shadow-green w-full text-xl font-body flex items-center max-h-14 justify-between px-6">
         <div className="flex h-14 items-center">
            <span className="lg:pr-36">saulo-veiga</span>
            <div className="hidden lg:flex ">
               {pageList.map((page) => (
                  <span className="px-8 border-x border-primary-shadow-green h-14 flex items-center">
                     {page}
                  </span>
               ))}
            </div>
         </div>
         <span className="hidden pl-6 border-l border-primary-shadow-green h-14 lg:flex items-center">
            _contact-me
         </span>
         <MdDehaze className=" sm:hidden block fill-primary-light-grey" />
      </header>
   );
};
