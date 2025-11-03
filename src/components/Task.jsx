import React from "react";
import style from "./Task.module.css";

const Task = ({ title, descTask, done, toggle, id }) => {

  function handleCheck({ target }) {
    toggle(title, !target.checked);
  }

  return (
    <div className={style.task}>
      <div className={style.checkbox}>
        <input
          name="done"
          type="checkbox"
          checked={done}
          onChange={handleCheck}
        />
      </div>

      <div className={style.infos}>
        <h1>{title}</h1>

        <p>{descTask}</p>
      </div>
    </div>
  );
};

export default Task;
