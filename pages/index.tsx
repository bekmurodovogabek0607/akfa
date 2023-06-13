import React, { useState } from 'react'
import { PageProps } from './_app'
import Button from '@/component/Button'
import PageBox from '@/component/PageBox'
import soat from '../images/soat.webp'


import Image from 'next/image'
import Container from '@/component/Container'
import FlexBox from '@/component/FlexBox'
import Head from 'next/head'
import Derazastyle1 from '@/component/derazaStyle/Derazastyle1'
import Derazastyle2 from '@/component/derazaStyle/Derazastyle2'
import Derazastyle11 from '@/component/derazaStyle/Derazastyle11'
const index = (props: PageProps) => {
    return (<>
        <Head>
            <title>Quronim</title>
        </Head>
        <Container >
            <FlexBox >
                <PageBox imgSrc='/images/eshik.png' text='Eshik' link='/eshik/1' />
                <PageBox imgSrc='/images/image.webp' text='Deraza' link='/deraza/styles' />
                <PageBox imgSrc='' text='Fortichka' link='/eshi/1' />
            </FlexBox>
        </Container>
    </>

    )
}

export default index 