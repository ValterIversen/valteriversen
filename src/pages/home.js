import Image from 'next/image'
import ProjectsHero from '../components/ProjectsHero'
import Header from '../components/Header'
import About from '../components/About'

import en from "../../assets/en.json"
import pt from "../../assets/pt.json"

export default function Home(props) {
    console.log("props " + JSON.stringify(props))
  
    const content = props === 'pt' ? en : pt;
  return (
    <Header content={content}>
      <div>
        <ProjectsHero content={content}/>
        <About content={content}/>
      </div>
    </Header>
  )
}
export async function getStaticProps({ locale }) {
    console.log("locale "+ locale)    

    const content = locale === 'pt' ? en : pt;
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        content,
      },
    }
  }