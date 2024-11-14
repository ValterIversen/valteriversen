import {useTranslations} from 'next-intl';
import '../globals.css'  // ou o nome do seu arquivo CSS

import Hero from '../../components/Hero'
import Header from '../../components/Header'
import About from '../../components/About'
import Projects from '../../components/Projects';
 
export default function HomePage() {
  return (
    <div>
    <Header>
      <div>
        <Hero/>
        <Projects/>
        <About/>
      </div>
    </Header>
    </div>
  );
}
