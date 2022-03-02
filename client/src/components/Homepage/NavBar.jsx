import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import "./NavBar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
		<div className="absolute w-full z-10">
			<nav className="">
				<div className=" mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between ">
						<div className="w-full flex items-center justify-between">
							<div className="">
								<a href="" className="navbar-brand">
									E-SUMMIT
								</a>
							</div>
							<div className="hidden md:block">
								<div className="flex items-baseline space-x-8">
									<a href="/" className="nav-link nav-link-ltr ">
										HOME
									</a>
									<a href="#" className="nav-link nav-link-ltr ">
										TEAM
									</a>

									<a href="/#eventshelf" className="nav-link nav-link-ltr">
										EVENTS
									</a>

									<a href="/#speakers" className="nav-link nav-link-ltr ">
										SPEAKERS
									</a>

									<a href="#" className="nav-link nav-link-ltr ">
										SPONSORS
									</a>
									{/* <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    TEAM
                  </a> */}
								</div>
							</div>
							<div>
								<a
									href="https://dare2compete.com/festival/e-summit22-making-impossible-inevitable-indian-institute-of-information-technology-pune-21495"
                  target="_blank"
          
									type="submit"
									className="text-white border-2 hover:bg-white border-white hover:text-black font-semibold rounded-full m-2 py-1 px-3 text-xs sm:text-sm transition duration-150 ease-in-out"
								>
									REGISTER NOW
								</a>
							</div>
						</div>
						<div className="-mr-2 flex md:hidden">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div
							className="md:hidden backdrop-blur bg-cyan-400 bg-opacity-20 absolute z-10 w-full"
							id="mobile-menu"
						>
							<div className=" px-2 pt-2 pb-3 space-y-1 sm:px-3">
								<a
									href="#"
									className="font-Montserrat font-bold hover:bg-cyan-700 text-white block px-3 py-2 rounded-md text-base"
								>
									HOME
								</a>

								<a
									href="#"
									className="font-Montserrat text-white hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold"
								>
									TEAM
								</a>

								<a
									href="#"
									className="font-Montserrat font-bold text-white hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base "
								>
									EVENTS
								</a>

								<a
									href="#"
									className="font-Montserrat font-bold text-white hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base "
								>
									SPEAKERS
								</a>

								<a
									href="#"
									className="font-Montserrat font-bold text-white hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base "
								>
									SPONSORS
								</a>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default NavBar;
