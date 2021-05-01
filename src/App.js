import { useState } from "react";

import Header from "./Components/Header";
import Tasks from "./Components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Laundry",
      day: "Feb 69th",
      reminder: false,
    },
    {
      id: 2,
      text: "Groceries",
      day: "Feb 13th",
      reminder: false,
    },
    {
      id: 3,
      text: "Haircut",
      day: "Feb 420th",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No tasks remaining"
      )}
    </div>
  );
}

export default App;
