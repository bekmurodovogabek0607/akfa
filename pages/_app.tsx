import React, { useState } from 'react'
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Navbar from '@/component/Navbar';
export type PageProps = AppProps & {
  DerazaColor: 'rgb(219, 219, 219)' | 'rgb(160, 64, 0)' | 'rgb(46, 46, 46)',
  setDerazaColor: React.Dispatch<React.SetStateAction<string | null>>,
  ShishaColor: " rgb(143, 247, 238)" | ' rgb(73, 112, 219)' | 'rgb(141, 69, 2)',
  setShishaColor: React.Dispatch<React.SetStateAction<string | null>>,
  DesingPage: React.JSX.Element | null,
  setDesingPage: React.Dispatch<React.SetStateAction<React.JSX.Element | null>>,
  NumberAyats: number,
  setMyStyles: React.Dispatch<React.SetStateAction<string[] | null>>,
  MyStyles: [],
  setNumberAyats: React.Dispatch<React.SetStateAction<number>>,
  SeeRazmer: 'none' | 'block',
  setSeeRazmer: React.Dispatch<React.SetStateAction<'none' | "block">>,
}
export default function MyApp({ Component, pageProps }: PageProps) {
  const [DerazaColor, setDerazaColor] = useState<string>('rgb(46, 46, 46)')
  const [ShishaColor, setShishaColor] = useState<string>(' rgb(143, 247, 238)')
  const [MyStyles, setMyStyles] = useState<string[] | null>([])
  const [DesingPage, setDesingPage] = useState<React.JSX.Element | null>(null)
  const [NumberAyats, setNumberAyats] = useState<number>(1)


  const [SeeRazmer, setSeeRazmer] = useState<'none' | 'block'>('none');
  return (
    <>
      <Head>
        <title>Quronim</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

      <Navbar />
      <Component {...{ pageProps, DerazaColor, setDerazaColor, SeeRazmer, setSeeRazmer, DesingPage, setDesingPage, NumberAyats, setNumberAyats, ShishaColor, setShishaColor,MyStyles,setMyStyles }} />
    </>
  )


}

