import React from "react";
import style from "./Formes.module.css";

const Forms = () => {
  const [inputJson, setInputJson] = React.useState({title:"",descTask:""});

  // Ele não re-renderiza o componente a cada digitação, pois usa refs para rastrear os campos.
  // Como eu poderia usar os REFS para melhorar a performace

  function anyChange({target}) {
    setInputJson({...inputJson, [target.name]: target.value})
  }

  function anySubmit(event){
    event.preventDefault();
    console.log(inputJson)
  }
  
  return (
    <div className={`${style.container}`}>
      <form className={style.forms} onSubmit={anySubmit}>
        <input name="title" type="text" value={inputJson.title} onChange={anyChange}/>
        <textarea name="descTask" value={inputJson.descTask} onChange={anyChange}></textarea>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Forms;
