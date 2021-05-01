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
  };

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
