import React from "react";
import style from "./Tasks.module.css";
import Title from '../components/Title'

const Tasks = () => {

  return (
    <div className={style.tasksSection}>

      <Title text={"To Do"}/>

      <div className={style.task}>

        <div className={style.checkbox}>
          <input name="done" type="checkbox"/>
        </div>

        <div className={style.infos}>
          <h1>Titulo</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            animi cumque nam eum consectetur obcaecati autem aspernatur nihil
            neque quae! Maiores consequuntur placeat temporibus repellendus
            velit reiciendis similique, officiis maxime.
          </p>
        </div>
      </div>

      <Title text={"Done"}/>

      <div className={style.task}>

        <div className={style.checkbox}>
          <input name="done" type="checkbox"/>
        </div>

        <div className={style.infos}>
          <h1>Titulo</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            animi cumque nam eum consectetur obcaecati autem aspernatur nihil
            neque quae! Maiores consequuntur placeat temporibus repellendus
            velit reiciendis similique, officiis maxime.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Tasks;
