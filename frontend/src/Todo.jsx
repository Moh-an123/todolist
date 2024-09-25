import React, { useState } from "react";
import axios from "axios";
const Todo = () => {
  const [task, setTask] = useState("");

  const handleadd = (e) => {
    if(task==='') return ;
    e.preventDefault();
    console.log(task);
    axios
      .post("http://127.0.0.1:3001/add", { task: task, finish: false })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <input
      className="inp"
      id='inp'
        type="text"
        placeholder="your work"
        value={task}
        onChange={(e) => {
      
          console.log(task);
          setTask(e.target.value);
        
        }}
        onKeyDown={(e) => {
          if (e.target.value!==''&&e.key === "Enter") {
            handleadd(e);
          }
        }}
      />
      <button className="btn" type="submit" onClick={handleadd}>
        Add
      </button>
    </>
  );
};

export default Todo;
