import React from 'react'
import styles from './style.module.scss'
type ConteinerType={
    
} &React.ComponentProps<'div'>
const Pastkishisha = ({children,...rest }: ConteinerType) => {
  return (
    <div className={styles['Pastkishisha']}>{children}</div>
  )
}

export default Pastkishisha