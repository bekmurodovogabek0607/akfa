import Image from 'next/image'
import React from 'react'
import style from './style.module.scss'
import Container from './Container'
import Link from 'next/link'
import Button from './Button'
const Navbar = () => {
  return (
    <Container>
      <div className={style['Navbar']}>
        <div>
          <Image src={'/images/akfa.png'} height={50} width={150} />
         
        </div>
        {/* <div>
        <i className="fa-solid fa-bars"></i>
        </div>
        */}
      </div>
    </Container>

  )
}

export default Navbar