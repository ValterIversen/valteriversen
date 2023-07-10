
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LocaleChanger() {
    const { locale, locales, asPath } = useRouter();

    // change just the locale and maintain all other route information including href's query
    const changeLocale = () => {router.push({ pathname, query }, asPath, { locale: nextLocale })}

    return (

        <Link href="/" locale="en-US">
            To /fr/another
        </Link>
    )
}