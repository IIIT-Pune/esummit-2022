import eventIcon from "../Images/events/icons/madads.png";

function Modal({ details, clickHandler, show }) {
  const { name, logolink, d2clink, description, knowmore } = details;
  return (
    <div className={show ? "events-modal show" : "events-modal"}>
      <div className="events-modal-container font-bold flex justify-center items-center lg:w-1/2 md:w-3/4">
        <span
          className="events-modal-close"
          onClick={() => {
            clickHandler();
          }}
        >
          X
        </span>
        <div className="flex flex-row justify-center items-center">
          <div className="events-modal-page1 flex flex-col justify-between items-center mx-4">
            <div>
              <img src={eventIcon} alt="Minimal logo" />
              {/* <img src={logolink} height="50%" width="20%" alt="Minimal logo" /> */}
            </div>
            <div>
              <button
                className="text-black font-Poppins border-2 hover:bg-black border-black hover:text-white text-base font-semibold rounded-full m-2 p-2 px-7"
                onClick={() => {
                  window.location = d2clink;
                }}
              >
                Register
              </button>
            </div>
          </div>
          <div className="events-modal-page2 flex flex-col justify-between items-center space-y-8 m-2">
            <div className="text-xl text-center">{name}</div>
            <div className="events-modal-description text-justify">
              {description}
            </div>
            <button
              className="text-black w-fit font-Poppins border-2 hover:bg-black border-black hover:text-white text-base font-semibold rounded-full m-2 p-2 px-7"
              onClick={() => {
                window.location = knowmore;
              }}
            >
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
