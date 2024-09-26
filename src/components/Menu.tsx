export const Menu = () => {
   const menuItems = [
      { name: "_hello", link: "" },
      { name: "_about-me", link: "" },
      { name: "_projects", link: "" },
      { name: "_contact", link: "" },
   ];
   return (
      <div className="fixed left-0 top-14 w-full grid h-full p-2">
         <ul className="w-full bg-primary-strong-blue border-2 border-primary-shadow-green  h-full">
            {menuItems.map((item) => (
               <li className="border-b-2 border-primary-shadow-green p-4 cursor-pointer hover:text-white">
                  {item.name}
               </li>
            ))}
         </ul>
      </div>
   );
};
