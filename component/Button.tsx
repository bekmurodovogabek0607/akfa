import React from 'react'
type ButtonBox = {
    text?:string
    handelClick:()=>void
    class?:string
} & React.ComponentProps<'button'>
import style from './style.module.scss'


const ButtonDefaultStyle={
    minWidth: "100px",
    padding: "10px 20px",
    borderRadius: "10px",
    fontSize: "18px",
    fontWeight: "500",
    border: "1px solid",
    cursor: "pointer",
   
}
const Button = ({...rest}:ButtonBox) => {
  return (
    <button onClick={rest.handelClick} style={ButtonDefaultStyle} className={style[`${rest.class}`]}>{rest.text}</button>
  )
}

export default Button