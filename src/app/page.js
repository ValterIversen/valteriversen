import Image from 'next/image'
import ProjectsHero from '../components/ProjectsHero'
import Header from '../components/Header'

export default function Home() {
  return (
    <Header>
      <ProjectsHero />
    </Header>
  )
}
