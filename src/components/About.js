import Image from 'next/image';

const About = ({content}) => {
    return(
        <div id="about" className="p-0 contents h-screen 
        lg:relative lg:block">
            <div className="z-0 px-8 pt-10 
            lg:absolute lg:max-w-2xl lg:left-28 lg:top-1/2 lg:transform lg:-translate-y-1/2
            2xl:max-w-4xl 2xl:left-42">
                <span className="text-black text-2xl font-medium lg:text-5xl
                2xl:text-6xl">
                    <span className="relative inline-flex pr-1 mr-1">
                        <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                        <span className="relative ml-1 md:ml-0">{content.frase1}</span>
                    </span>
                    {content.frase2}
                    <span className="relative inline-flex px-1 mx-1">
                        <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                        <span className="relative ml-1 md:ml-0">{content.frase3}</span>
                    </span>{content.frase4}
                </span>
                <p className="text-black
                text-lg mx-5 mt-5
                lg:text-2xl lg:mx-12 lg:mt-8
                2xl:text-3xl 2lx:mx-18 2xl:mt-10">
                    Como desenvolvedor e analista de qualidade, busco construir soluções que resistam ao tempo e transcendam as expectativas.
                </p>
            </div>
            <div className="z-1 mb-0 mt-auto
            lg:absolute lg:bottom-0 lg:right-3">
                <Image
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