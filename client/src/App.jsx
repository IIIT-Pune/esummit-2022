import "./App.css";
import Cap from "./components/CAP/Cap";
import Dashboard from "./components/CAP/dashboard/Dashboard";
import Homepage from "./components/Homepage/HomePage";
import NavBar from "./components/Homepage/NavBar";
import About from "./components/about/About";

function App() {
  return (
    <>
    <div className="py-9 px-4">
      <Cap />
      <Dashboard />
    </div>
    {/* <div className="Main">
        <NavBar />
        <Homepage />
        <About />
        </div> */}
      </>
  );
}

export default App;

