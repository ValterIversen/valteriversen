import Image from 'next/image';

const About = () => {
    return(
        <div id="about" className="p-0 contents h-screen">
            <div className="px-8 pt-10">
                <span className="text-black text-2xl font-medium">
                    <span className="relative inline-flex pr-1 mr-1">
                        <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                        <span className="relative ml-1 md:ml-0">Qualidade </span>
                    </span>
                    é o alicerce que sustenta a grandeza de um software. Como desenvolvedor e analista de 
                    <span className="relative inline-flex px-1 mx-1">
                        <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                        <span className="relative ml-1 md:ml-0"> qualidade, </span>
                    </span>
                    busco construir soluções que resistam ao tempo e transcendam as 
                    <span className="relative inline-flex px-1 mx-1">
                        <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                        <span className="relative ml-1 md:ml-0"> expectativas. </span>
                    </span>
                </span>
            </div>
            <div className="mb-0 mt-auto">
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