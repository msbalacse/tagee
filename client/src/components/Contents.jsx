import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Contents = ({ type }) => {
  const [data, setData] = useState([]);
  const navigation = useNavigate();

  const getData = async (type) => {
    try {
      const response = await fetch(
        type === ""
          ? "http://localhost:5000/tagee/"
          : `http://localhost:5000/tagee/tag/${type}`
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deletePost = async (id) => {
    await fetch(`http://localhost:5000/tagee/${id}`, {
      method: "DELETE",
    }).then(() => {
      console.log("Successfully deleted");
    });
    getData(type);
  };

  useEffect(() => {
    getData(type);
  }, [type]);

  return (
    <>
      <div>
        <h1 className="font-bold text-xl mb-4"># {type ? type : "Explore"}</h1>
      </div>
      <div className="grid sm:grid-col-2 md:grid-cols-3 gap-4 ">
        {data.map((data) => (
          <div
            key={data.id}
            className="bg-indigo-100 p-[4px] h-fit flex flex-col gap-4 relative"
          >
            <h1 className="font-bold text-lg p-2">{data.name}</h1>
            <p className="text-sm ">{data.description}</p>
            <p className="bg-yellow-400 px-2 py-1 text-xs rounded-xl w-fit ">
              {data.tag}
            </p>
            <p className="text-sm ">Date : {data.date.substring(0, 10)}</p>
            <button
              className="bg-blue-500 text-white absolute right-0 top-0 text-xs px-2 rounded-es-lg"
              onClick={() => deletePost(data.id)}
            >
              del
            </button>
          </div>
        ))}

        {/* Template created */}
        {/* <div className="bg-indigo-100 p-[4px] w-[250px] flex flex-col gap-4">
        <h1 className="font-bold text-xl">Title</h1>
        <p className="text-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore id,
          eveniet inventore vitae nisi cum
        </p>
        <p className="bg-yellow-400 px-2 py-1 text-xs rounded-xl w-fit ">
          news
        </p>
        <p className="text-sm ">Date : 2000-01-01</p>
      </div> */}
      </div>
    </>
  );
};

export default Contents;
