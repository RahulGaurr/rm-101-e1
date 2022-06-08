import { TodoContext } from "../context/todoContext";
import styles from "./taskApp.module.css";
import { useContext, useEffect } from "react";
import AddTask from "./AddTask/AddTask";
import { TaskHeader } from "./TaskHeader";
import data from "../data/tasks.json";
import Tasks from "./Tasks/Tasks";

const TaskApp = () => {
  // NOTE: do not delete `data-testid` key value pair
  const { handleChange } = useContext(TodoContext);

  useEffect(() => {
    handleChange(data);
  }, []);

  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader />
      <AddTask />
      <Tasks />
    </div>
  );
};

export default TaskApp;
