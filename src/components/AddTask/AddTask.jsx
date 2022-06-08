import styles from "./addTask.module.css";
import { useContext, useState } from "react";
import { TodoContext } from "../../context/todoContext";


const AddTask = () => {
  const { todo, handleChange } = useContext(TodoContext);
  const [taskData, setTaskData] = useState({
    done: false,
    count: 1,
  });

  function handleTask(event) {
    const { name, value } = event.target;
    setTaskData({
      ...taskData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTask = true;

    if (taskData.text === "") {
      return;
    }
    todo.map((task) => {
      if (task.text === taskData.text) {
        newTask = false;
        return;
      }
    });
    if (newTask) {
      handleChange([...todo, { ...taskData, id: todo.length + 1 }]);
    }
  }

  return (
    <div
      className={styles.todoForm}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <input
        data-testid="add-task-input"
        type="text"
        name="text"
        className="addtask"
        onChange={handleTask}
      />
      <button data-testid="add-task-button" onClick={handleSubmit}>
        +
      </button>
    </div>
  );
};

export default AddTask;
