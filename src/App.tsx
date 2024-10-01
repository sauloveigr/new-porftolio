import { Footer } from "./components/Footer";
import { HomeBanner } from "./components/HomePage/HomeBanner";
import { NavBar } from "./components/NavBar";

function App() {
   return (
      <section className="w-full h-svh grid p-2 bg-primary-strong-blue bg-[url('./assets/bg-blur.svg')] sm:bg-[url('./assets/blur-desktop.svg')] bg-cover lg:bg-auto lg:bg-no-repeat lg:bg-right">
         <article className="border-2 border-primary-shadow-green rounded-lg relative">
            <NavBar />
            <HomeBanner />
            <Footer />
         </article>
      </section>
   );
}

export default App;
