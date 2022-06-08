import styles from "./taskHeader.module.css";
import { useContext } from "react";
import { TodoContext } from "../../context/todoContext";


const TaskHeader = () => {
  const { todo } = useContext(TodoContext);
  // sample values to be replaced
  let totalTask = todo.length;
  let unCompletedTask = todo.filter((task) => !task.done).length;

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <h1>Todo App</h1>
      <span>You Have </span>
      <b data-testid="header-remaining-task">{unCompletedTask}</b>
      <span> out of </span>
      <b data-testid="header-total-task">{totalTask}</b>
      <span> Tasks Remaining </span>
    </div>
  );
};

export default TaskHeader;
