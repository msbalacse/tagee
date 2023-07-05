import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [date, setDate] = useState("");

  const navigation = useNavigate();

  const newPost = async (e) => {
    e.preventDefault();
    console.log(title, description, tag, date);
    const obj = { name: title, description, tag, date };
    console.log(JSON.stringify(obj));
    try {
      const res = await fetch("http://localhost:5000/tagee/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    } catch (error) {
      console.error(error.message);
    }

    navigation("/");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold m-4">#NEW POST</h1>
      <p className="border border-indigo-400 w-1/2"></p>
      <form onSubmit={newPost} className="p-4">
        <div>
          <label>Title</label>
          <br />
          <input onChange={(e) => setTitle(e.target.value)} type="text" />
        </div>
        <div>
          <label>Description</label>
          <br />
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            name=""
          ></textarea>
        </div>
        <div>
          <label>Tag</label>
          <br />
          <input onChange={(e) => setTag(e.target.value)} type="text" />
        </div>
        <div>
          <label>Date</label>
          <br />
          <input onChange={(e) => setDate(e.target.value)} type="Date" />
        </div>
        <input
          className="bg-indigo-500 p-2 text-white"
          type="submit"
          value="Post"
        />
      </form>
    </div>
  );
};

export default Post;
