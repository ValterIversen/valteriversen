import React from 'react';

const ProjectsHero = () => {        
    return (
        <section className="pt-12 bg-gray-50 sm:pt-16">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="px-6 text-lg text-gray-600 font-inter">Analista de qualidade e desenvolvedor</h1>
                    <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
                        Aqui, cada bug é um 
                        <span className="relative inline-flex px-1 mx-1">
                            <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                            <span className="relative ml-1 md:ml-0"> desafio </span>
                        </span>
                         e cada linha de código é uma  
                        <span className="relative inline-flex px-1 mx-1">
                            <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                            <span className="relative ml-1 md:ml-0"> conquista </span>
                        </span>
                    </p>

                    <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                    <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button"
                        >
                            Vamos conversar?
                        </a>

                        <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
                            role="button"
                        >
                            Me conheça melhor
                        </a>
                    </div>

                    <p className="mt-8 text-base text-gray-500 font-inter">Veja alguns casos de sucesso</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-black mx-auto">
                        <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
                    </svg>

                </div>
            </div>

            <div className="mt-10 pb-12 bg-white">
                <div className="relative mt-12">
                    <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
                    <div className="relative mx-auto drop-shadow-2xl">
                        <video className="lg:max-w-4xl mx-auto w-11/12 rounded-xl" autoPlay loop muted>      
                            <source src="./sheeptown.mp4" type="video/mp4"/>       
                        </video>
                    </div>
                </div>
                <div className="relative mt-12">
                    <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
                    <div className="relative mx-auto drop-shadow-2xl">
                        <video className="lg:max-w-4xl mx-auto w-11/12 rounded-xl" autoPlay loop muted>      
                            <source src="./sitechacara.mp4" type="video/mp4"/>       
                        </video>
                    </div>
                </div>
                <div className="relative mt-12">
                    <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
                    <div className="relative mx-auto drop-shadow-2xl">
                        <video className="lg:max-w-4xl mx-auto w-11/12 rounded-xl" autoPlay loop muted>      
                            <source src="./automatation.mp4" type="video/mp4"/>       
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProjectsHero;