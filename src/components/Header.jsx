import style from "./Header.module.css"

function Header() {
  
  return (
    <>
      <div className={`${style.title} + container`}>To-Do List</div>
    </>
  )
}

export default Header
