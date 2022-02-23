import React from "react";

const ListItem = (props) => {
  return (
    <div>
      <div className="p-2 my-2 font-bold border border-sky-500 backdrop-blur-lg text-white text-xl md:text-2xl lg:text-3xl font-Poppins flex flex-row justify-between">
        <div>{props.rank}</div>
        <div>{props.name}</div>
        <div>{props.points}</div>
      </div>
    </div>
  );
};

export default ListItem;
