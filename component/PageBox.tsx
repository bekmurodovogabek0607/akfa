import Link from 'next/link'
import React from 'react'
import style from './style.module.scss'
import Image from 'next/image'
type PageBoxType = {
    imgSrc:string
    text: string
    link: string
    
} &   React.ComponentProps<'div'>
const PageBox = ({children, ...rest }: PageBoxType) => {
    return (
        <Link href={rest.link}>
            <div className={style['PageBox']}>
                <div>
                    <Image src={rest.imgSrc} height={200} width={200}/>
                </div>
               
              
                <h3>{rest.text}</h3>
            </div>
        </Link>
    )
}

export default PageBox