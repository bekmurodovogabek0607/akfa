import Button from '@/component/Button'
import React from 'react'
import styles from './allderaza.module.scss'
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
import { PageProps } from '../_app'
import { log } from 'console'
import { useRouter } from 'next/router'
const allstyles = (props: PageProps) => {
    const router=useRouter()
    function AddMystyles(check: boolean, style: string) {
         console.log(props.MyStyles);
         if (check) props.setMyStyles([...props.MyStyles, style])
       
        
        else {
            props.setMyStyles(props.MyStyles.filter(item => item != style))
        }
    }
    function CheckMyStyles(style:string):boolean {
      if( props.MyStyles.filter(item=>item==style).length==0) return false
      return true
        
    }
    console.log(props.MyStyles);

    return (
        <div className={styles['AllDeraza']}>
            <div>
                <h2>Dizaylarni qo'shing</h2>
                <div>
                    <label htmlFor="hammasi">Barchasi</label>
                    <input type='checkbox' id='hammasi' />
                </div>
            </div>
            <div>
                <div>
                    <div >
{/* Yangi mahsulot bo'sa new style yozib qo'yiladi */}

                    </div>
                    <Derazastyle1 shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} />

                    <div className={styles['container']}>
                        <div className={styles['round']}>
                            <input checked={CheckMyStyles('Derazastyle1')} onChange={(e) => { AddMystyles(e.target.checked, 'Derazastyle1') }} type="checkbox" id="checkbox1" />
                            <label htmlFor="checkbox1"></label>
                        </div>
                    </div>
                </div>
                <div>
                    <div></div>
                    <Derazastyle2 shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} />
                    <div className={styles['container']}>
                        <div className={styles['round']}>
                            <input checked={CheckMyStyles('Derazastyle2')} onChange={(e) => { AddMystyles(e.target.checked, 'Derazastyle2') }} type="checkbox" id="checkbox2" />
                            <label htmlFor="checkbox2"></label>
                        </div>
                    </div>
                </div>
                <div>
                    <div></div>
                    <Derazastyle3 shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} />
                    <div className={styles['container']}>
                        <div className={styles['round']}>
                            <input checked={CheckMyStyles('Derazastyle3')} onChange={(e) => { AddMystyles(e.target.checked, 'Derazastyle3') }} type="checkbox" id="checkbox3" />
                            <label htmlFor="checkbox3"></label>
                        </div>
                    </div>
                </div>
                <div>
                    <div></div>
                    <Derazastyle4 shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} />
                    <div className={styles['container']}>
                        <div className={styles['round']}>
                            <input checked={CheckMyStyles('Derazastyle4')} onChange={(e) => { AddMystyles(e.target.checked, 'Derazastyle4') }} type="checkbox" id="checkbox4" />
                            <label htmlFor="checkbox4"></label>
                        </div>
                    </div>
                </div>
                <div>
                    <div></div>

                    <Derazastyle5 shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} />
                    <div className={styles['container']}>
                        <div className={styles['round']}>
                            <input checked={CheckMyStyles('Derazastyle5')} onChange={(e) => { AddMystyles(e.target.checked, 'Derazastyle5') }} type="checkbox" id="checkbox5" />
                            <label htmlFor="checkbox5"></label>
                        </div>
                    </div>
                </div>
                <div>
                    <div></div>
                    <Derazastyle6 shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} />
                    <div className={styles['container']}>
                        <div className={styles['round']}>
                            <input checked={CheckMyStyles('Derazastyle6')} onChange={(e) => { AddMystyles(e.target.checked, 'Derazastyle6') }} type="checkbox" id="checkbox6" />
                            <label htmlFor="checkbox6"></label>
                        </div>
                    </div>
                </div>
                <div>
                    <div></div>
                    <Derazastyle7 shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} />
                    <div className={styles['container']}>
                        <div className={styles['round']}>
                            <input checked={CheckMyStyles('Derazastyle7')} onChange={(e) => { AddMystyles(e.target.checked, 'Derazastyle7') }} type="checkbox" id="checkbox7" />
                            <label htmlFor="checkbox7"></label>
                        </div>
                    </div>
                </div>
                <div>
                    <div></div>
                    <Derazastyle8 shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} />
                    <div className={styles['container']}>
                        <div className={styles['round']}>
                            <input checked={CheckMyStyles('Derazastyle8')} onChange={(e) => { AddMystyles(e.target.checked, 'Derazastyle8') }} type="checkbox" id="checkbox8" />
                            <label htmlFor="checkbox8"></label>
                        </div>
                    </div>
                </div>
                <div>
                    <div></div>
                    <Derazastyle9 shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} />
                    <div className={styles['container']}>
                        <div className={styles['round']}>
                            <input checked={CheckMyStyles('Derazastyle9')} onChange={(e) => { AddMystyles(e.target.checked, 'Derazastyle9') }} type="checkbox" id="checkbox9" />
                            <label htmlFor="checkbox9"></label>
                        </div>
                    </div>
                </div>
                <div>
                    <div></div>
                    <Derazastyle10 shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} />
                    <div className={styles['container']}>
                        <div className={styles['round']}>
                            <input checked={CheckMyStyles('Derazastyle10')} onChange={(e) => { AddMystyles(e.target.checked, 'Derazastyle10') }} type="checkbox" id="checkbox10" />
                            <label htmlFor="checkbox10"></label>
                        </div>
                    </div>
                </div>
                <div>
                    <div></div>
                    <Derazastyle11 shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} />
                    <div className={styles['container']}>
                        <div className={styles['round']}>
                            <input checked={CheckMyStyles('Derazastyle11')} onChange={(e) => { AddMystyles(e.target.checked, 'Derazastyle11') }} type="checkbox" id="checkbox11" />
                            <label htmlFor="checkbox11"></label>
                        </div>
                    </div>
                </div>
                <div>
                    <div></div>
                    <Derazastyle12 shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} />
                    <div className={styles['container']}>
                        <div className={styles['round']}>
                            <input checked={CheckMyStyles('Derazastyle12')} onChange={(e) => { AddMystyles(e.target.checked, 'Derazastyle12') }} type="checkbox" id="checkbox12" />
                            <label htmlFor="checkbox12"></label>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles['newStyles']}>New style</div>
                    <Derazastyle13 shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} />
                    <div className={styles['container']}>
                        <div className={styles['round']}>
                            <input checked={CheckMyStyles('Derazastyle13')} onChange={(e) => { AddMystyles(e.target.checked, 'Derazastyle13') }} type="checkbox" id="checkbox13" />
                            <label htmlFor="checkbox13"></label>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={styles['newStyles']}>New style</div>
                    <Derazastyle14 shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} />
                    <div className={styles['container']}>
                        <div className={styles['round']}>
                            <input checked={CheckMyStyles('Derazastyle14')} onChange={(e) => { AddMystyles(e.target.checked, 'Derazastyle14') }} type="checkbox" id="checkbox14" />
                            <label htmlFor="checkbox14"></label>
                        </div>
                    </div>
                </div>
                <div className={styles['AddNewStyles']}>
                    <h1>+</h1>
                    <h4>Yangi dizayn qo'shtiring</h4>
                </div>


            </div>
            <div>
                <Button handelClick={() => { router.push('/deraza/styles')}} class='BtnSucc' text="Dizaylarni qo'shish" />
            </div>
        </div>
    )
}

export default allstyles