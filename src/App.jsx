import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="mx-auto max-w-7xl  px-8">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
}

export default App;
