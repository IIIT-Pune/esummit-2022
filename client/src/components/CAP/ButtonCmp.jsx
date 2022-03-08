import React from "react";

const ButtonCmp = ({ loading, children }) => {
	return (
		<div>
			<button
				type="submit"
				disabled={loading ? true : false}
				className="text-black font-Poppins border-2 hover:bg-black border-black hover:text-white text-base font-semibold rounded-full m-2 p-2 px-7"
			>
				{children }
			</button>
		</div>
	);
};

export default ButtonCmp;
