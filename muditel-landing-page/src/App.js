import { Image } from "@chakra-ui/react";
import NavigationBar from "./components/Nav.js";
import Hero from "./views/Hero.js";
import About from "./views/About.js";

import waves from "./assets/images/waves-bg-fixed.svg";
import Contact from "./views/Contact.js";

function App() {
  return (
    <>
      <main>
        <NavigationBar />
        <Hero />
        <div className="waves">
          <Image src={waves} />
        </div>
        <About />
        <Contact />
        
        <footer>Muditel &copy; {new Date().getFullYear()}</footer>
      </main>
    </>
  );
}

export default App;
