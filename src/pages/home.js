'use client'
import Image from 'next/image'
import Hero from '../components/Hero'
import Header from '../components/Header'
import About from '../components/About'
import Projects from '../components/Projects';

import en from "../../assets/en.json"
import pt from "../../assets/pt.json"
import { useEffect } from 'react';

export default function Home({locale}) {
  useEffect(() => {
    console.log("locale "+ locale)
  },[])

  const content = locale == 'pt' ? en : pt;
  return (
    <Header content={content}>
      <div>
        <Hero content={content}/>
        <Projects content={content}/>
        <About content={content}/>
      </div>
    </Header>
  )
}
export async function getStaticProps({ locale }) {
    
    return {
      props: {
        locale,
      },
    }
  }