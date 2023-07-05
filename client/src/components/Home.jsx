import React, { useState } from "react";
import Navbar from "./Navbar";
import Aside from "./Aside";
import Contents from "./Contents";

const Home = () => {
  const [tag, setTag] = useState("explore");

  const navigateTag = (data) => {
    setTag(data);
  };

  return (
    <>
      <div className="sm:w-full md:w-3/4 p-4 m-auto ">
        <Navbar />
      </div>
      <div className="sm:w-full md:w-3/4 p-4 m-auto grid sm:grid-cols-1 md:grid-cols-3 gap-4">
        <Aside sendData={navigateTag} />
        <div className="col-span-2">
          <Contents type={tag} />
        </div>
      </div>
    </>
  );
};

export default Home;
