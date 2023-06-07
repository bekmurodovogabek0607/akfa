import React from 'react'
import  Link  from 'next/link'
import style from './style.module.scss'
import Head from 'next/head'
export interface ILink {
    link: string,
    text: string
}
type Sarlavha = {
    text: string,
    line: ILink[]
}
const SaravhaH1 = ({ ...rest }: Sarlavha) => {
    return (<>
    <Head>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </Head>
    <div className={style['Sarlavha']}>
            <ul>
                {
                    rest.line.map((item: ILink) => {
                        return (
                         <Link href={item.link}><li>{item.text} <i className="fa-solid fa-chevron-right"></i></li></Link>       )
                    })

                }
              

            </ul>
           
        </div>
    </>
        
    )
}

export default SaravhaH1