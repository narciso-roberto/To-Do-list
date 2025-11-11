import React from "react";
import style from "./Formes.module.css";
import axios from 'axios';

const Forms = () => {
  const [inputJson, setInputJson] = React.useState({ title: "", taskDesc: "", done: false });

  // Ele não re-renderiza o componente a cada digitação, pois usa refs para rastrear os campos.
  // Como eu poderia usar os REFS para melhorar a performace

  function anyChange({ target }) {
    setInputJson({ ...inputJson, [target.name]: target.value });
  }

  function anySubmit(event) {
      event.preventDefault();

      axios.post('http://127.0.0.1:8000/createTasks',inputJson)
      .then(function (response) {
        window.location.reload()
      })
      .catch(function (error) {
        console.log(error);
    });

  }

  return (
    <div className={`${style.container}`}>
      <form className={style.forms} onSubmit={anySubmit}>
        <input
          name="title"
          type="text"
          value={inputJson.title}
          onChange={anyChange}
        />
        <textarea
          name="taskDesc"
          value={inputJson.taskDesc}
          onChange={anyChange}
        ></textarea>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Forms;
