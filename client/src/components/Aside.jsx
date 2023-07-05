import React, { useEffect, useState } from "react";
import { MdOutlineExplore } from "react-icons/md";

const Aside = ({ sendData }) => {
  const [data, setData] = useState("");
  const handleData = (sendData) => {
    sendData(data);
  };
  useEffect(() => {
    handleData(sendData);
  }, [data]);
  return (
    <div>
      <div className="flex gap-1 items-center w-[150px] p-2 rounded-full text-white ring-2 ring-indigo-400 border-[2px] border-white bg-indigo-400">
        <MdOutlineExplore size={"20px"} />
        <p onClick={() => setData("")}>Explore</p>
      </div>
      <div className="my-5 font-bold">Popular hash🏷️</div>
      <div>
        <li
          className="list-none my-2 hover:text-yellow-300"
          onClick={() => setData("games")}
        >
          #Games
        </li>
        <li
          className="list-none my-2 hover:text-yellow-300"
          onClick={() => setData("computer")}
        >
          #Computer
        </li>
        <li
          className="list-none my-2 hover:text-yellow-300"
          onClick={() => setData("news")}
        >
          #News
        </li>
        <li
          className="list-none my-2 hover:text-yellow-300"
          onClick={() => setData("movies")}
        >
          #Movies
        </li>
        <li
          className="list-none my-2 hover:text-yellow-300"
          onClick={() => setData("music")}
        >
          #Music
        </li>
      </div>
    </div>
  );
};

export default Aside;
