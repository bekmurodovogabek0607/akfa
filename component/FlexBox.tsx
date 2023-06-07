import React from 'react'
import style from './style.module.scss'
type FlexBoxType={
    height?:string
} & React.ComponentProps<'div'>
const FlexBox = ({children,...rest}:FlexBoxType) => {
  return (
    <div style={{height:rest.height}} className={style['FlexBox']}>{children}</div>
  )
}

export default FlexBox