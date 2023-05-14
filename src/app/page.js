import Image from 'next/image'
import ProjectsHero from '../components/ProjectsHero'
import Header from '../components/Header'
import About from '../components/About'

export default function Home() {
  return (
    <Header>
      <div>
        <ProjectsHero />
        <About />
      </div>
    </Header>
  )
}
