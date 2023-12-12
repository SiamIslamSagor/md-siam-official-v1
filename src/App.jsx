import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="mx-auto max-w-7xl px-2 md:px-8">
      <Navbar />
      <Banner />
      <About />
      <Skills />
    </div>
  );
}

export default App;
