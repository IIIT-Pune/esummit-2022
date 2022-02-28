import "./App.css";
import Cap from "./components/CAP/Cap";
import Dashboard from "./components/CAP/dashboard/Dashboard";
import Homepage from "./components/Homepage/HomePage";
import NavBar from "./components/Homepage/NavBar";
import About from "./components/about/About";
import EventSection from "./components/events-shelf/Section";
import { Route, Routes } from "react-router-dom";
import Speakers from "./components/Speakers/Speakers";
import EventCard from "./components/events/EventCard";

// import img from "";

function App() {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<div className="">
							<NavBar />
							<Homepage />
							<About />
							<EventSection />
							<Speakers />
						</div>
					}
				/>
				<Route path="event" element={<EventCard />} />
				<Route
					path="campus"
					element={
						<div className="py-9 px-4 bg-vrbg bg-cover lg:h-screen">
							<Cap />
						</div>
					}
				/>
				<Route
					path="leaderboard"
					element={
						<div className="py-9 px-4 bg-vrbg bg-cover">
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
