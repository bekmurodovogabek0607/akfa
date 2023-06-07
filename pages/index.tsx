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
const index = (props: PageProps) => {
    return (<>
        <Head>
            <title>Quronim</title>
        </Head>
        <Container >
            <FlexBox >
                <PageBox imgSrc='' text='Eshik' link='/eshik/1' />
                <PageBox imgSrc='' text='Deraza' link='/deraza/1' />
                <PageBox imgSrc='' text='Fortichka' link='/eshi/1' />
            </FlexBox>
        </Container>s
    </>

    )
}

export default index 