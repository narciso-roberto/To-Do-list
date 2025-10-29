import React from 'react'
import style from "./Formes.module.css"

const Forms = () => {
  return (
    <div className={`${style.container} container`}>
      <form className={style.forms}>
        <input name= "title" type='text'/>
        <textarea name='descTask'></textarea>
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default Forms
