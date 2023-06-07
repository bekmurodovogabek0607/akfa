import React from 'react'
import styles from './style.module.scss'
type ConteinerType={
    
} &React.ComponentProps<'div'>
const Derazashisha = ({children,...rest }: ConteinerType) => {
  return (
    <div className={styles['derazatype']}>
       {children}
    </div>
  )
}

export default Derazashisha