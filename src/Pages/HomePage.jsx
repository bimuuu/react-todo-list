import React, { useEffect, useState } from "react";
import NewTask from "../component/NewTask";
import TodoItem from "../component/TodoItem";
import Spinnner from "../component/Spinnner";
import { toast } from "react-toastify";

const HomePage = () => {
  const [todos, setTodos] = useState([]); //array read-only
  const [loading, setLoading] = useState(false);

  const delay = () => {
    return new Promise((resolve) => setTimeout(resolve, 300));
  };
  const addTask = async (task) => {
    setLoading(true);
    setTodos((prevTodos) => [...prevTodos, task]); //spread
    await delay();
    setLoading(false);
    toast.success("Successfully Added!");
  };

  const deleteTask = (id) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== id)); //filter method ไม่ต้องการ item ต้องการแค่ index
    toast.success("Successfully Deleted!");
  };

  const updateTask = (task, id) => {
    setTodos((prevTodos) => prevTodos.map((t, i) => (i === id ? task : t))); //map method t ตัวเดิม i index ใช่ id ไหม ถ้าใช่ให้เปลี่ยน task ถ้าไม่ใช่ใช้ข้อมูลเดิม
    toast.success("Successfully Updated!");
  };

  //ลองการใช้ useEffect และ fetch api

  //   const [users, setUsers] = useState([]);

  useEffect(() => {
    const storeTodos = localStorage.getItem("todos");
    if (storeTodos) {
      setTodos(JSON.parse(storeTodos));
    }
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.json();
        console.log(data);
        //   setUsers(data);
      } catch (error) {
        console.log("Error", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <>
      {/* {loading ? (
        <Spinnner />
      ) : (
        users.map((user, i) => (
          <div key={i}>
            {user.id} {user.title}
          </div>
        ))
      )} */}

      <NewTask addTask={addTask} />

      {loading ? (
        <Spinnner />
      ) : (
        todos.length >= 0 && (
          <ul className="bg-grey-200 shadow-sm rounded-md p-4">
            {todos.map((todo, i) => (
              <TodoItem
                key={i}
                id={i}
                todo={todo}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            ))}
          </ul>
        )
      )}
    </>
  );
};

export default HomePage;
