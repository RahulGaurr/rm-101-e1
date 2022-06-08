import Task from "../Task/Task";
import styles from "./tasks.module.css";

const Tasks = () => {
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        <Task />
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
