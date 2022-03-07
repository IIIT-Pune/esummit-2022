import React from "react";

const ListItem = (props) => {
  return (
    <div>
      <div className="p-2 border border-sky-500 backdrop-blur-lg text-white md:text-2xl lg:text-[20px] font-Poppins flex flex-row justify-between">
        <div>{props.rank}</div>
        <div>{props.name}</div>
        <div>{props.points}</div>
      </div>
    </div>
  );
};

export default ListItem;
