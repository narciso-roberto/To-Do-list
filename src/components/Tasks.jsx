import React from "react";
import style from "./Tasks.module.css";
import Title from "../components/Title";
import Task from "./Task";

const Tasks = () => {
  const API = [
    {
      title: "Estudar React",
      descTask:
        "Aprender sobre hooks e gerenciamento de estado com useState e useEffect.",
      done: false,
    },
    {
      title: "Revisar JavaScript",
      descTask: "Revisar conceitos de promises, async/await e closures.",
      done: true,
    },
    {
      title: "Criar projeto pessoal",
      descTask:
        "Iniciar um pequeno projeto para praticar React e integração com API.",
      done: false,
    },
  ];

  const [tasks, setTask] = React.useState(API);

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
              descTask={objTask.descTask}
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
              descTask={objTask.descTask}
              toggle={teste}
            />
          );
        }
      })}
    </div>
  );
};

export default Tasks;
