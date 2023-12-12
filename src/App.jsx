import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="mx-auto max-w-7xl px-2 md:px-8">
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
    </div>
  );
}

export default App;
