import React, { useRef } from "react";
import { motion } from "motion/react";

const NewTask = ({ addTask }) => {
  // ไม่จำเป็นต้อง Render ตลอด ให้ใช้ useRef แทนได้
  //   const [title, setTitle] = useState("");

  const title = useRef();
  const form = useRef();

  const submitForm = (e) => {
    e.preventDefault();

    const task = {
      title: title.current.value,
      date: new Date().toLocaleString(),
    };
    addTask(task);

    form.current.reset();
  };

  return (
    <form ref={form} onSubmit={submitForm}>
      <label htmlFor="title" className="text-lg text-gray-400"></label>
      <div className="flex gap-x-2 bg-white rounded-md shadow-sm p-2 pl-3 mt-2">
        <input
          type="text"
          id="title"
          className="focus:outline-none w-full"
          maxLength="100"
          placeholder="Type your what to do."
          autoFocus
          required
          ref={title}
          //   value={title}
          //   onChange={(e) => setTitle(e.target.value)}
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="summit"
          className="w-40 px-3 py-2 rounded font-semibold bg-blue-400 text-white hover:bg-blue-600"
        >
          Add Task
        </motion.button>
      </div>
    </form>
  );
};

export default NewTask;
