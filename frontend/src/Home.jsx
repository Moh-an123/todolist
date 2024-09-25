import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import axios from "axios";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
const Home = () => {
  const [chck, setChck] = useState(false);
  const [todos, settodos] = useState([]);
  useEffect(() => {
    axios
      .get("https://todolist-tew6.onrender.com/get")
      .then((result) => {
        settodos(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [chck]);
  const handlecheck = (id) => {
    setChck(!chck);
    axios
      .put("https://todolist-tew6.onrender.com/update/" + id)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handledelete = (id) => {
    setChck(!chck);
    console.log("delete");
    axios
      .delete("https://todolist-tew6.onrender.com/delete/" + id)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
    <div className="main">
      <h1 >Todo List</h1>
      <Todo />
      {todos.length > 0 ? (
        todos.map((item) => {
          return (
            <div className="list" onClick={() => handlecheck(item._id)}>
              {item.finish ? (
                <FaRegCheckCircle className="circle" />
              ) : (
                <FaRegCircle className="circle" />
              )}
              <h2 id={item} className={item.finish?"todo underline":"todo"}>{item.task}</h2>
              <MdDeleteOutline
                className="delete"
                onClick={() => handledelete(item._id)}
              />
            </div>
          );
        })
      ) : (
        <h2>No Items</h2>
      )
      }</div>
    </>
  );
};

export default Home;
