import {useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';

import Hero from '../../components/Hero'
import Projects from '../../components/Projects';

type Props = {
  params: {locale: string};
};

export default function IndexPage({params: {locale}}: Props) {
  
  setRequestLocale(locale);

  return (
    <div>
        <Hero/>
        <Projects/>
    </div>
  );
}
