import React from "react";

const ButtonCmp = (props) => {
  return (
    <div>
      <button
        type="submit"
        className="text-black font-Poppins border-2 hover:bg-black border-black hover:text-white text-base font-semibold rounded-full m-2 p-2 px-7"
      >
        {props.children}
      </button>
    </div>
  );
};

export default ButtonCmp;
