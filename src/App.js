import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30 PM",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Feb 6th at 1:30 PM",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30 PM",
      reminder: false,
    },
  ]);
  return (
    <div className="container">
      <Header name="Alfalfa" />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

// Delete Task
const deleteTask = (id) => {
  console.log("delete!", id);
};

export default App;
