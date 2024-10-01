export const Menu = () => {
   const menuItems = [
      { name: "_hello", link: "" },
      { name: "_about-me", link: "" },
      { name: "_projects", link: "" },
      { name: "_contact", link: "" },
   ];
   return (
      <div className="fixed left-0 top-0 w-full grid h-svh p-2">
         <div className=" bg-primary-strong-blue border-2 border-primary-shadow-green rounded-lg">
            <p className="p-4 lg:pr-36  border-b-2 border-primary-shadow-green">
               saulo-veiga
            </p>
            <ul>
               {menuItems.map((item) => (
                  <li className="border-b-2 border-primary-shadow-green p-4 cursor-pointer hover:text-white">
                     {item.name}
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};
