import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import Data from "./data";
import CapCard from "./CapCard";
import axios from "axios";
import baseUrl from "../../../baseUrl";

const Dashboard = () => {
  const [leaderboard, Setleaderboard] = useState([]);
  useEffect(() => {
    axios
      .get(`${baseUrl}api/leaderboard`)
      .then((res) => {
        Setleaderboard(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <div className="mb-3 font-Montserrat text-white text-center text-5xl">
          <span className="mb-4"> CAMPUS </span>
          <span className="text-black border bg-white py-0.3 px-1">
            AMBASSADOR
          </span>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-center  lg:m-12">
        <div className="w-full flex justify-center">
          <div className="w-full mt-4">
            <div className="p-2 my-2 font-bold border border-sky-500 backdrop-blur-lg text-sky-500 text-2xl lg:text-3xl font-Poppins flex flex-row justify-between">
              <div className="">RANK</div>
              <div className="">NAME</div>
              <div className="">POINTS</div>
            </div>

            {leaderboard.map((item, i) => {
              return (
                <ListItem
                  key={item._id}
                  rank={i + 1}
                  name={item.name}
                  points={item.points}
                />
              );
            })}

            {/* {Data.map((item) => {
              return (
                <ListItem
                  key={item.id}
                  rank={item.rank}
                  name={item.name}
                  points={item.points}
                />
              );
            })} */}
          </div>
        </div>
        <CapCard name="Cameron" rank={101} points={1982} refcode="ABCXYZ" />
      </div>
    </div>
  );
};

export default Dashboard;
