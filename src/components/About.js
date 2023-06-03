import Image from 'next/image';

const About = () => {
    return(
        <div id="about" className="relative h-screen">
            <div className="text-black">
                <span className="max-w-40">
                    Qualidade é o alicerce que sustenta a grandeza de um software - como desenvolvedor e analista de qualidade, busco construir soluções que resistam ao tempo e transcendam as expectativas.
                </span>
            </div>
            <div className="absolute bottom-0 right-3">
                <Image
                className="mb-0 mt-auto"
                    src="/perfil.png"
                    width={700}
                    height={700}
                    alt="Picture of the author"
                    />

            </div>
        </div>
    )
}

export default About;