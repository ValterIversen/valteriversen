import Image from 'next/image';

const About = () => {
    return(
        <div id="about" className="relative h-screen">
            <span className="
            lg:max-w-lg lg:top-1/2 lg:transform lg:-translate-y-1/2  lg:absolute lg:left-48
            text-black font-medium lg:text-4xl text-2xl
            z-0">
                <span className="relative inline-flex px-1 mx-1">
                    <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                    <span className="relative ml-1 md:ml-0">Qualidade </span>
                </span>
                é o alicerce que sustenta a grandeza de um software. Como desenvolvedor e analista de 
                <span className="relative inline-flex px-1 mx-1">
                    <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                    <span className="relative ml-1 md:ml-0"> qualidade </span>
                </span>
                , busco construir soluções que resistam ao tempo e transcendam as 
                <span className="relative inline-flex px-1 mx-1">
                    <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                    <span className="relative ml-1 md:ml-0"> expectativas. </span>
                </span>
            </span>
            <div className="absolute bottom-0 lg:right-3 z-1">
                <Image
                    src="/perfil.png"
                    width={800}
                    height={800}
                    alt="Picture of the author"
                    />

            </div>
        </div>
    )
}

export default About;