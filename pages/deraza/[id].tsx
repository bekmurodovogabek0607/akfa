import Derazastyle1 from '@/component/derazaStyle/Derazastyle1'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { PageProps } from '../_app'

import Derazastyle2 from '@/component/derazaStyle/Derazastyle2'
import Derazastyle3 from '@/component/derazaStyle/Derazastyle3'
import Derazastyle4 from '@/component/derazaStyle/Derazastyle4'
import Derazastyle5 from '@/component/derazaStyle/Derazastyle5'
import Derazastyle6 from '@/component/derazaStyle/Derazastyle6'
import Derazastyle7 from '@/component/derazaStyle/Derazastyle7'
import Derazastyle8 from '@/component/derazaStyle/Derazastyle8'
import styles from '../style.module.scss'
import Button from '@/component/Button'
import Derazastyle9 from '@/component/derazaStyle/Derazastyle9'
import Derazastyle10 from '@/component/derazaStyle/Derazastyle10'
import Derazastyle11 from '@/component/derazaStyle/Derazastyle11'
import Derazastyle12 from '@/component/derazaStyle/Derazastyle12'
import Derazastyle13 from '@/component/derazaStyle/Derazastyle13'
import Derazastyle14 from '@/component/derazaStyle/Derazastyle14'
const id = (props: PageProps) => {
    const route = useRouter()
    let page: React.JSX.Element | null = null
    const [ShishaQavat, setShishaQavat] = useState<string>('1x')
    const [Tor, setTor] = useState<boolean>(false)
    const [Mexanizm, setMexanizm] = useState<boolean>(false)
    const [Metall, setMetall] = useState<boolean>(true)
    const [Gulli, setGulli] = useState<boolean>(true)
    


    const [ArkaBor, setArkaBor] = useState<boolean>(false)

    switch (route.query.id) {
        case "1":
            page = <Derazastyle1 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={'block'} />
            break;

        case "2":
            page = <Derazastyle2 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={'block'} />
            break;

        case "3":
            page = <Derazastyle3 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={'block'} />
            break;

        case "4":
            page = <Derazastyle4 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={'block'} />
            break;

        case "5":
            page = <Derazastyle5 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={'block'} />
            break;

        case "6":
            page = <Derazastyle6 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={'block'} />
            break;
        case "7":
            page = <Derazastyle7 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={'block'} />
            break;

        case "8":
            page = <Derazastyle8 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={'block'} />
            break;
        case "8":
            page = <Derazastyle8 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={'block'} />
            break;
        case "9":
            page = <Derazastyle9 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={'block'} />
            break;
        case "10":
            page = <Derazastyle10 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={'block'} />
            break;
        case "11":
            page = <Derazastyle11 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={'block'} />
            break;
        case "12":
            page = <Derazastyle12 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={'block'} />
            break;
        case "13":
            page = <Derazastyle13 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={'block'} />
            break;

        case "14":
            page = <Derazastyle14 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={'block'} />
            break;



        default:
            break;
    }

    return (
        <>
            <div className={styles['DerazaGlavniExpanent']}>
                <div>
                    {page}
                </div>
                <div style={{ marginTop: '40px', }} >

                    <div className={styles['Razmerolish']}>
                        <i className="fa-solid fa-chevron-left"></i>
                        <span></span>
                        <i className="fa-solid fa-chevron-right"></i>
                        <input placeholder='mm' />

                    </div>


                </div>

                <div  >
                    <div className={styles['Razmerolishboyi']}>
                        <i className="fa-solid fa-chevron-left"></i>
                        <span></span>
                        <i className="fa-solid fa-chevron-right"></i>
                        <input placeholder='mm' />
                    </div>

                </div>
                <div style={ArkaBor ? { display: 'block' } : { display: 'none' }} className={styles['ArkaRazmer']}>
                    <div className={styles['ArkaRazmerPast']}>
                        <i className="fa-solid fa-chevron-left"></i>
                        <span></span>
                        <i className="fa-solid fa-chevron-right"></i>
                        <input placeholder='mm' />
                    </div>
                    <div className={styles['ArkaRazmerTepa']}>
                        <i className="fa-solid fa-chevron-left"></i>
                        <span></span>
                        <i className="fa-solid fa-chevron-right"></i>
                        <input placeholder='mm' />
                    </div>
                </div>


            </div>
            <div style={{ marginTop: '20px' }} className={styles['SliderDeraza']}>
                <div onClick={() => { route.push('/deraza/1'); setArkaBor(false) }}><Derazastyle1 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={props.SeeRazmer} /></div>
                <div onClick={() => { route.push('/deraza/3'); setArkaBor(false) }}><Derazastyle3 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={props.SeeRazmer} /></div>
                <div onClick={() => { route.push('/deraza/2'); setArkaBor(false) }}><Derazastyle2 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={props.SeeRazmer} /></div>
                <div onClick={() => { route.push('/deraza/4'); setArkaBor(false) }}><Derazastyle4 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={props.SeeRazmer} /></div>
                <div onClick={() => { route.push('/deraza/5'); setArkaBor(false) }}><Derazastyle5 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={props.SeeRazmer} /></div>
                <div onClick={() => { route.push('/deraza/6'); setArkaBor(false) }}><Derazastyle6 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={props.SeeRazmer} /></div>
                <div onClick={() => { route.push('/deraza/7'); setArkaBor(false) }}><Derazastyle7 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={props.SeeRazmer} /></div>
                <div onClick={() => { route.push('/deraza/14'); setArkaBor(false) }}><Derazastyle14 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={props.SeeRazmer} /></div>
                <div onClick={() => { route.push('/deraza/8'); setArkaBor(false) }}><Derazastyle8 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={props.SeeRazmer} /></div>
                <div onClick={() => { route.push('/deraza/9'); setArkaBor(false) }}><Derazastyle9 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={props.SeeRazmer} /></div>
                <div onClick={() => { route.push('/deraza/10'); setArkaBor(true) }}><Derazastyle10 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={props.SeeRazmer} /></div>
                <div onClick={() => { route.push('/deraza/11'); setArkaBor(true) }}><Derazastyle11 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={props.SeeRazmer} /></div>
                <div onClick={() => { route.push('/deraza/12'); setArkaBor(true) }}><Derazastyle12 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={props.SeeRazmer} /></div>
                <div onClick={() => { route.push('/deraza/13'); setArkaBor(true) }}><Derazastyle13 shishaColor={props.ShishaColor} derazaColor={props.DerazaColor} seerazmer={props.SeeRazmer} /></div>
            </div>
            <div className={styles['rangi']}>
                <h1>Room Rangi</h1>
                <div>
                    <div onClick={() => { props.setDerazaColor('rgb(219, 219, 219)') }} style={{ backgroundColor: 'rgb(219, 219, 219)' }}></div>
                    <div onClick={() => { props.setDerazaColor('rgb(160, 64, 0)') }} style={{ backgroundColor: 'rgb(160, 64, 0)' }}></div>

                    <div onClick={() => { props.setDerazaColor('rgb(46, 46, 46)') }} style={{ backgroundColor: 'rgb(46, 46, 46)' }}></div>
                </div>
            </div>
            <div className={styles['rangi']}>
                <h1>Shisha Rangi</h1>
                <div>
                    <div onClick={() => { props.setShishaColor('rgb(143, 247, 238)') }} style={{ backgroundColor: 'rgb(143, 247, 238)' }}></div>
                    <div onClick={() => { props.setShishaColor('rgb(73, 112, 219)') }} style={{ backgroundColor: 'rgb(73, 112, 219)' }}></div>
                    <div onClick={() => { props.setShishaColor('rgb(141, 69, 2)') }} style={{ backgroundColor: 'rgb(141, 69, 2)' }}></div>
                </div>
            </div>
            <div className={styles['rangi']}>
                <h1>Shisha qavatligi</h1>
                <div>
                    <Button class={ShishaQavat == '1x' ? "BtnSucc" : ""} handelClick={() => { setShishaQavat('1x') }} text='1X'></Button>
                    <Button class={ShishaQavat == '2x' ? "BtnSucc" : ""} handelClick={() => { setShishaQavat('2x') }} text='2X'></Button>

                </div>
            </div>
            <div className={styles['rangi']}>
                <h1>Shisha Turi</h1>
                <div>
                    <Button class={Gulli ? 'BtnSucc' : ''} handelClick={() => { setGulli(true) }} text='Gulsiz'></Button>
                    <Button class={Gulli ? '' : 'BtnSucc'} handelClick={() => { setGulli(false) }} text='Gulli'></Button>


                </div>

            </div>
            <div className={styles['rangi']}>
                <h1>Room turi</h1>
                <div>
                    <Button class={Metall ? 'BtnSucc' : ''} handelClick={() => { setMetall(true) }} text='Metall'></Button>
                    <Button class={Metall ? '' : 'BtnSucc'} handelClick={() => { setMetall(false) }} text='Plasmass'></Button>

                </div>


            </div>
            <div className={styles['rangi']}>
                <h1>To'r</h1>
                <div>
                    <Button class={Tor ? "" : 'BtnSucc'} handelClick={() => { setTor(false) }} text="To'rsiz"></Button>
                    <Button class={Tor ? "BtnSucc" : ''} handelClick={() => { setTor(true) }} text="To'rli"></Button>

                </div>


            </div>
            <div className={styles['rangi']}>
                <h1>Mexanizm</h1>
                <div>
                    <Button class={Mexanizm ? "" : 'BtnSucc'} handelClick={() => { setMexanizm(false) }} text="Yo'q"></Button>
                    <Button class={Mexanizm ? "BtnSucc" : ''} handelClick={() => { setMexanizm(true) }} text="Bor"></Button>

                </div>


            </div>
            <Button class='BtnSucc' handelClick={() => { }} text='Buyurtma qabul qilish'></Button>


        </>

    )
}

export default id