export const GithubLink = () => (
   <div className="text-sm gap-4 flex flex-col">
      <p className="text-primary-light-grey">// find my profile on Github:</p>
      <div>
         <span className="mr-2 text-primary-purple">const</span>
         <span className="mr-2 text-primary-light-green">githubLink</span>
         <span className="mr-2">=</span>
         <a
            className="cursor-pointer"
            href="https://github.com/sauloveigr"
            target="_blank"
            rel="noopener noreferrer"
         >
            <p className="sm:inline text-primary-orange">
               “https://github.com/sauloveigr”
            </p>
         </a>
      </div>
   </div>
);
