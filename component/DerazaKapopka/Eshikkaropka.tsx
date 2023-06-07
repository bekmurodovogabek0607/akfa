import React from 'react'
import styles from './style.module.scss'
type ConteinerType = {
    seerazmer: 'none' | 'block'
    eshikwitdh: string

    tepashisha: 'none' | 'block'
    derazaColor: 'rgb(219, 219, 219)' | 'rgb(160, 64, 0)' | 'rgb(46, 46, 46)'
} & React.ComponentProps<'div'>
const EshikKaropka = ({ children, ...rest }: ConteinerType) => {
    return (
        <div className={styles['Eshikkaropka']} style={{ backgroundColor: rest.derazaColor,width:rest.eshikwitdh }}>
            <div>
                {children}

            </div>

          


        </div>
    )
}

export default EshikKaropka