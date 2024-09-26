import { GithubLink } from "./GithubLink";
import { HomeIntroduction } from "./HomeIntroduction";
import codeImage from "../../assets/code-snippet-2.svg";

export const HomeBanner = () => {
   return (
      <div className="grid grid-flow-col p-9 pt-24 max-h-[800px] content-around max-w-6xl md:mt-16 m-auto lg:gap-20 place-items-center">
         <div className="grid gap-20">
            <HomeIntroduction />
            <GithubLink />
         </div>
         <div className="hidden lg:grid gap-5">
            {Array(3)
               .fill(null)
               .map((_, index: number) => (
                  <img
                     key={index}
                     src={codeImage}
                     className={index % 2 === 0 ? "opacity-35" : ""}
                  />
               ))}
         </div>
      </div>
   );
};
