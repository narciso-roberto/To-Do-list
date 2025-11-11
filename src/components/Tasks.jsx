import React from "react";
import style from "./Tasks.module.css";
import Title from "../components/Title";
import Task from "./Task";
import axios from 'axios';
// http://127.0.0.1:8000
const Tasks = () => {


  const [tasks, setTask] = React.useState([]);
  const [error, setError] = React.useState(null);


  React.useEffect(() => {
      axios.get('http://127.0.0.1:8000/getTasks')
    .then(function (response) {
      console.log(response.data)
      setTask(response.data);
      setError(false)
    })
    .catch(function (error) {
      // handle error
      setError(true)
    });
  },[])



  function teste(identificador, valor) {
    const newTasks = tasks.map((task) => {
      if (task.title == identificador) {
        return {
          ...task,
          done: !valor,
        };
      }

      return task;
    });

    setTask(newTasks);
  }

  if(error) return <div>Something went wrong. sorry</div>
  return (
    <div className={style.tasksSection}>
      <Title text={"To Do"} />

      {tasks.map((objTask, index) => {
        if (!objTask.done) {
          return (
            <Task
              key={index}
              id={index}
              title={objTask.title}
              done={false}
              taskDesc={objTask.taskDesc}
              toggle={teste}
            />
          );
        }
      })}

      <Title text={"Done"} />

      {tasks.map((objTask, index) => {
        if (objTask.done) {
          return (
            <Task
              key={index}
              title={objTask.title}
              done={true}
              taskDesc={objTask.taskDesc}
              toggle={teste}
            />
          );
        }
      })}
    </div>
  );
};

export default Tasks;
