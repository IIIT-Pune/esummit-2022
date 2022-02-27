import "./App.css";
import Cap from "./components/CAP/Cap";
import Dashboard from "./components/CAP/dashboard/Dashboard";
import Homepage from "./components/Homepage/HomePage";
import NavBar from "./components/Homepage/NavBar";
import About from "./components/about/About";
import EventSection from "./components/events-shelf/Section";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			{/* <div className="py-9 px-4">
      <Cap />
      <Dashboard />
    </div> */}

			<Routes>
				<Route
					path="/"
					element={
						<div className="">
							<NavBar />
							<Homepage />
							<About />
							<EventSection />
						</div>
					}
				/>
				<Route
					path="campus"
					element={
						<div className="py-9 px-4">
							<Cap />
							<Dashboard />
						</div>
					}
				/>
				<Route
					path="*"
					element={
						<div className="">
							<NavBar />
							<Homepage />
							<About />
							<EventSection />
						</div>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
