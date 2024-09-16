import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";

export const Footer = () => (
   <footer className="hidden absolute bottom-0 left-0 sm:flex items-center border-t border-primary-shadow-green w-full px-6 text-primary-light-grey">
      <div className="flex gap-4 items-center">
         <span className="py-4">find me in:</span>
         <a
            href="https://www.linkedin.com/in/saulosrv/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer p-1"
         >
            <IoLogoLinkedin size={25} />
         </a>
         <a
            href="https://github.com/sauloveigr"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer p-1"
         >
            <IoLogoGithub size={25} />
         </a>
      </div>
   </footer>
);
