import React from 'react'
import styles from './style.module.scss'
type ConteinerType = {
    seerazmer: 'none' | 'block'
    tepashisha: 'none' | 'block'
    derazaColor: 'rgb(219, 219, 219)' | 'rgb(160, 64, 0)' | 'rgb(46, 46, 46)'
} & React.ComponentProps<'div'>
const DerazaKaropka = ({ children, ...rest }: ConteinerType) => {
    return (
        <div className={styles['karopka']} style={{ backgroundColor: rest.derazaColor }}>
            <div>
                {children}

            </div>

          


        </div>
    )
}

export default DerazaKaropka