

const ProjectsData = [
    {
        video: './sheeptown.mp4',
        title: 'Sheeptown',
        subtitle: 'Um ecommerce completo com integração com a api do Mercado Pago'
    },
    {
        video: './sitechacara.mp4',
        title: 'Chácara Luz do Sol',
        subtitle: 'Um site modelo para disponibilizar aos donos de edículas e chácaras uma forma fácil e barata de divulgar seus imoveis para eventos'
    },
    {
        video: './automatation.mp4',
        title: 'Automação de testes',
        subtitle: 'Um projeto base de automação de testes em C# utilizando Specflow, Selenium e Refit. Para documentar uma boa estrutura para se utilizar em projetos futuros'
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
    const {video, title, subtitle} = projectData;
    return (
        <div className="relative mt-12">
            <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
            <div className="group relative mx-auto drop-shadow-2xl lg:max-w-4xl mx-auto w-11/12 overflow-hidden rounded-xl">
                <video className="transition duration-500 ease-in-out group-hover:scale-105" autoPlay loop muted>      
                    <source src={video} type="video/mp4"/>       
                </video>
                <div className="text-black absolute bottom-0 bg-white shadow-lg bg-clip-padding bg-opacity-60 border border-gray-200 backdrop-blur-xl
                border-none px-10
                transition-height duration-1000 ease-in-out w-full h-0 p-0 group-hover:h-32">
                    <p className="font-bold text-center mt-7">{title}</p>
                    <p className="text-center mt-3">{subtitle}</p>
                </div>
            </div>
        </div>
    )
}

export default Projects