'use client'
import Button from '@/component/Button'
import React from 'react'
import styless from './deraza.module.scss'
import Image from 'next/image'

import { PageProps } from '../_app'
import Derazastyle1 from '@/component/derazaStyle/Derazastyle1'
import Derazastyle2 from '@/component/derazaStyle/Derazastyle2'
import Derazastyle3 from '@/component/derazaStyle/Derazastyle3'
import Derazastyle4 from '@/component/derazaStyle/Derazastyle4'
import Derazastyle5 from '@/component/derazaStyle/Derazastyle5'
import Derazastyle6 from '@/component/derazaStyle/Derazastyle6'
import Derazastyle7 from '@/component/derazaStyle/Derazastyle7'
import Derazastyle8 from '@/component/derazaStyle/Derazastyle8'
import Derazastyle9 from '@/component/derazaStyle/Derazastyle10'
import Derazastyle10 from '@/component/derazaStyle/Derazastyle9'
import Derazastyle11 from '@/component/derazaStyle/Derazastyle11'
import Derazastyle12 from '@/component/derazaStyle/Derazastyle12'
import Derazastyle13 from '@/component/derazaStyle/Derazastyle13'
import Derazastyle14 from '@/component/derazaStyle/Derazastyle14'
import { useQuery } from '@/component/userouter'
const styles = (props: PageProps) => {
   
   
    function DerazaStyles(params: string): React.JSX.Element {
        switch (params) {
            case "Derazastyle1":
                return <Derazastyle1 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={'block'} />

            case "Derazastyle2":
                return <Derazastyle2 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={'block'} />
               
            case "Derazastyle3":
                return <Derazastyle3 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={'block'} />
               

            case "Derazastyle4":
                return <Derazastyle4 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={'block'} />
               

            case "Derazastyle5":
                return <Derazastyle5 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={'block'} />
              

            case "Derazastyle6":
                return <Derazastyle6 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={'block'} />
               
            case "Derazastyle7":
                return <Derazastyle7 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={'block'} />
               

            case "Derazastyle8":
                return <Derazastyle8 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={'block'} />
                

            case "Derazastyle9":
                return <Derazastyle9 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={'block'} />
               
            case "Derazastyle10":
                return <Derazastyle10 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={'block'} />
              
            case "Derazastyle11":
                return <Derazastyle11 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={'block'} />
              
            case "Derazastyle12":
                return <Derazastyle12 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={'block'} />
               
            case "Derazastyle13":
                return <Derazastyle13 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={'block'} />
               

            case "Derazastyle14":
                return <Derazastyle14 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={'block'} />
                
            default:
                return <div></div>



        }
    }
    return (
        <div className={styless['PersonStyles']}>
            {
                props.MyStyles.length == 0 ?
                    <div className={styless['AddStyles']}>
                        <Image src={'/images/derazastyles1.jpg'} width={200} height={200} />
                        <Button class='BtnSucc' text="Mavjud dizaynlarni qo'shing" handelClick={() => { useQuery('/allderaza/allstyles') }} />
                    </div>
                    :
                    <div className={styless['AllDeraza']}>
                        <div>
                            <h2>Sizda mavjud Dizaylar</h2>

                        </div>
                        <div>
                            {
                                props.MyStyles.map((item: string) => {
                                    return (
                                        <div>
                                            <div >
                                                {/* Yangi mahsulot bo'sa new style yozib qo'yiladi */}

                                            </div>
                                            {DerazaStyles(item)}


                                        </div>
                                    )
                                })
                            }




                        </div>

                    </div>
            }

        </div>

    )
}

export default styles