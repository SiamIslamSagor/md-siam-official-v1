import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div className="mx-auto max-w-7xl px-2 md:px-8">
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
