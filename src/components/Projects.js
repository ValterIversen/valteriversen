'use client';

import React, {useState, useRef} from 'react';
import Link from 'next/link';

const ProjectsData = [
    {
        video: './sheeptown.mp4',
        title: 'Sheeptown',
        subtitle: 'Um ecommerce completo com integração com a api do Mercado Pago',
    },
    {
        video: './sitechacara.mp4',
        title: 'Chácara Luz do Sol',
        subtitle: 'Um site modelo para disponibilizar aos donos de edículas e chácaras uma forma fácil e barata de divulgar seus imoveis para eventos',
        link: 'https://site-chacara.vercel.app/'
    },
    {
        video: './automatation.mp4',
        title: 'Automação de testes',
        subtitle: 'Um projeto base de automação de testes em C# utilizando Specflow, Selenium e Refit. Para documentar uma boa estrutura para se utilizar em projetos futuros',
        github: 'https://github.com/ValterIversen/TestAutomatation-XUnit-Selenium-Specflow'
    }
]

const Projects = () => {

    return(
        <div className="mt-10 pb-12 bg-white">
            {
                ProjectsData.map((projectData, index) => (
                    <Project projectData={projectData} key={`project-${index}`}/>
                ))
            }
    </div>
    )
}

const Project = ({projectData}) => {
    const {video, title, subtitle, link, github} = projectData;
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
  
    const handleVideoPress = () => {
      if (playing) {
        videoRef.current.pause();
        setPlaying(false);
      } else {
        videoRef.current.play();
        setPlaying(true);
      }
    };

    return (
        <div className="relative mt-12">
            <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
            <div className="group relative mx-auto drop-shadow-2xl lg:max-w-4xl mx-auto w-11/12 overflow-hidden rounded-xl"
                onClick={handleVideoPress} >
                <video className="transition duration-500 ease-in-out"
                     ref={videoRef} loop muted>      
                    <source src={video} type="video/mp4"/>       
                </video>
                {
                    !playing &&
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="black w-14 h-14
                    text-black bg-white bg-clip-padding bg-opacity-60 backdrop-blur-xl top-0 rounded-full p-0
                    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                    </svg>
                }

                {
                    !playing &&
                        <div className="text-black text-sm lg:text-base
                        absolute bottom-0 bg-white shadow-lg bg-clip-padding bg-opacity-60 border border-gray-200 backdrop-blur-xl
                        border-none px-10 transition-height duration-1000 ease-in-out w-full h-24 lg:h40 p-0">
                            <p className="font-bold text-center mt-2 lg:mt-7">{title}</p>
                            <p className="text-center mt-0 lg:mt-3">{subtitle}</p>
                            { github && <p className="text-center mt-3 font-medium"><Link href={github}>Acesse o projeto</Link></p>}
                            { link && <p className="text-center mt-3 font-medium"><Link href={link}>Acesse o site</Link></p>}
                        </div>
                }
            </div>
        </div>
    )
}

export default Projects