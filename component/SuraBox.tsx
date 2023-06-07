import React from 'react'
import style from './style.module.scss'
type Box = {
    suraName?:string
} & React.ComponentProps<'div'>
const SuraBox = ({children, ...rest}:Box) => {
  return (
    <div className={style['SuraPageBox']}>
      <h2>{rest.suraName}</h2>
      {children}
     
    </div>
  )
}

export default SuraBox