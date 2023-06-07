import React, { useContext } from 'react'
import styles from './style.module.scss'
import DerazaKaropka from '../DerazaKapopka/DerakaKaropka'
import Derazashisha from '../DerazaKapopka/Derazashisha'
import Tepashisha from '../DerazaKapopka/Tepashisha'
import Pastkishisha from '../DerazaKapopka/Pastkishisha'

import DerazaPalla from '../DerazaKapopka/DerazaPalla'
import Shisha from '../DerazaKapopka/Shisha'
import Container from '../Container'
import { PageProps } from '@/pages/_app'
const Derazastyle3 = ({ seerazmer, derazaColor, shishaColor }:
    {
        seerazmer: 'none' | 'block',
        derazaColor: 'rgb(219, 219, 219)' | 'rgb(160, 64, 0)' | 'rgb(46, 46, 46)'
        shishaColor: " rgb(143, 247, 238)" | ' rgb(73, 112, 219)' | 'rgb(141, 69, 2)'

    }) => {
    return (
        <Container>
            <DerazaKaropka seerazmer={seerazmer} tepashisha='block' derazaColor={derazaColor}>
                <Derazashisha>
                    <Tepashisha>
                        <Shisha shishaColor={shishaColor}></Shisha>
                    </Tepashisha>

                    <Pastkishisha>

                        <Shisha shishaColor={shishaColor} left={true} ><DerazaPalla shishaColor={shishaColor} derazaColor={derazaColor} seerazmer={seerazmer} position='rigth' /></Shisha>
                        <Shisha shishaColor={shishaColor} rigth={true}></Shisha>


                    </Pastkishisha>

                </Derazashisha>
            </DerazaKaropka>
        </Container>

    )
}

export default Derazastyle3