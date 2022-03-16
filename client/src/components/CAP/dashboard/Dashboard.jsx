import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import Data from "./data";
import CapCard from "./CapCard";
import axios from "axios";
import baseUrl from "../../../baseUrl";

const Dashboard = () => {
  const [leaderboard, Setleaderboard] = useState([]);
  const [token, Settoken] = useState(
    localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : null
  );
  const [user, Setuser] = useState(null);

  const FetchDataUser = async () => {
    const leaders = await axios
      .get(`${baseUrl}api/leaderboard`)
      .then((res) => {
        Setleaderboard(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
    if (token && leaders) {
      await axios
        .get(`${baseUrl}api/auth/fetchalldata`, {
          headers: {
            "auth-token": token,
          },
        })
        .then((res) => {
          const obj = leaders.findIndex((o) => o.email == res.data.email);
          if (obj != -1) {
            Setuser({
              ...res.data,
              rank: obj + 1,
              points: leaders[obj].points,
            });
          } else {
            Setuser({ ...res.data, rank: "", points: "" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    FetchDataUser();
  }, []);

  return (
    <div className="space-y-8 min-h-screen">
      <div>
        <div className="mb-3 font-Montserrat text-white text-center text-5xl">
          <span className="mb-4"> CAMPUS </span>
          <span className="text-black border bg-white py-0.3 px-1">
            AMBASSADOR
          </span>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-center lg:m-12">
        <div className="w-full flex justify-center">
          <div className="w-[90%] lg:w-[70%]  mt-4">
            <div className="p-2 my-2 font-bold border border-sky-500 backdrop-blur-lg text-sky-500 text-2xl lg:text-2xl font-Poppins flex flex-row justify-between">
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
        {user && (
          <CapCard
            name={user.name}
            rank={user.rank}
            points={user.points}
            refcode={user.referalID}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
