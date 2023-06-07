import React from 'react'
import style from './style.module.scss'
type ConteinerType={
    
} &React.ComponentProps<'div'>

const Container = ({children,...rest }: ConteinerType) => {
  return (
    <div  className={style['Container']}>
        {children}
    </div>
    
  )
}

export default Container