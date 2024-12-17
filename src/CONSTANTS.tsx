import { BriefcaseBusiness, Cloud, Database, Github, Layers, Linkedin, Mail, MapPin, Monitor, Server, Smartphone } from "lucide-react";

export const SOCIAL_MEDIA = {
    GitHub: {
        link: 'https://github.com/Charlyperez04',
        icon: <Github color="#12F7D6" strokeWidth={1.5} />
    },
    LinkedIn: {
        link: 'www.linkedin.com/in/carlos-abad-garcia-perez-809599228',
        icon: <Linkedin color="#12F7D6" strokeWidth={1.5} />
    },
}


export const CARD_DATA = {
    cardImgUrl: '/pics/developer-card.jpg',
    name: 'Carlos Perez',
    role: 'Fullstack Developer',
    data: [
        {
            icon: <Mail color="#12F7D6" size={18} />,
            value: 'charlyperezp04@gmail.com'
        },
        {
            icon: <MapPin color="#12F7D6" size={18} />,
            value: 'Veracruz, Mexico'
        },
        {
            icon: <BriefcaseBusiness color="#12F7D6" size={18} />,
            value: 'Full-time / Freelance'
        }
    ],
    cv: 'https://drive.google.com/file/d/1VFTivOkPZplHOqjCA1Waveb_stU9JDId/view?usp=sharing',
    description: "I help business grow by crafting amazing web experiences. If you're looking for a developer that likes to think outside the box, you're in the right place."
}

export const MINI_CARD_DATA = [
    {
        title: 'Projects Envolved',
        number: 50,
    },
    {
        title: 'Repositories Worked on',
        number: 10,
    },
    {
        title: 'Years of Experience',
        number: 2
    },
]


export const AboutMe = {
    data: <p className="font-ibm text-white text-sm">My name is Carlos and I specialize in fullstack web development that utilizes tools like <span className="text-primary">Next js</span>,<span className="text-primary">Nest js</span>,
        <span className="text-primary">Laravel</span>, <span>Flutter</span>, etc. <br /> <br />
        I am an apassionate developer that loves to learn new things everyday. I am always looking for new challenges and opportunities to grow as a developer. <br /> <br />
        When I'm not coding, you can find me studying something new, doing some exercise or thinking about new ideas for my next project. <br /> <br />
        I like to have my perspective of the things, because of that I like to read a lot of books and watch a lot of documentaries.
    </p>,
    img: '/pics/about-me.jpg'
}

export const categories = {
    frontend: {
        title: 'Frontend Development',
        icon: <Monitor />,
        tools: [
            { name: 'HTML', icon: '/tech/html.svg' },
            { name: 'CSS', icon: '/tech/css.svg' },
            { name: 'JavaScript', icon: '/tech/js.png' },
            { name: 'TypeScript', icon: '/tech/ts.svg' },
            { name: 'React', icon: '/tech/react.svg' },
            { name: 'TailwindCSS', icon: '/tech/tailwind.svg' },
            { name: 'Bootstrap', icon: '/tech/bootstrap.svg' },
        ],
    },
    backend: {
        title: 'Backend Development',
        icon: <Server />,
        tools: [
            { name: 'Node.js', icon: '/tech/node.svg' },
            { name: 'NestJS', icon: '/tech/nest.svg' },
            { name: 'PHP', icon: '/tech/php.svg' },
            { name: 'Python', icon: '/tech/python.svg' },
            { name: 'RabbitMQ', icon: '/tech/rabbitmq.svg' },
        ],
    },
    fullstack: {
        title: 'Fullstack Frameworks',
        icon: <Layers />,
        tools: [
            { name: 'Laravel', icon: '/tech/laravel.svg' },
            { name: 'Next.js', icon: '/tech/next.svg' },
            { name: 'WordPress', icon: '/tech/wordpress.png' },
        ],
    },
    app: {
        title: 'App Development',
        icon: <Smartphone />,
        tools: [
            { name: 'React Native', icon: '/tech/react.svg' },
            { name: 'Flutter', icon: '/tech/flutter.svg' },
            { name: 'Dart', icon: '/tech/dart.svg' },
        ],
    },
    devops: {
        title: 'DevOps & Cloud',
        icon: <Cloud />,
        tools: [
            { name: 'AWS', icon: '/tech/aws.svg' },
            { name: 'Cloudflare', icon: '/tech/cloudfare.svg' },
            { name: 'Linux', icon: '/tech/linux.svg' },
            { name: 'Git', icon: '/tech/git.svg' },
            { name: 'GitHub', icon: '/tech/github.svg' },
        ],
    },
    databases: {
        title: 'Databases',
        icon: <Database />,
        tools: [
            { name: 'MySQL', icon: '/tech/mysql.svg' },
            { name: 'PostgreSQL', icon: '/tech/postgres.svg' },
            { name: 'MongoDB', icon: '/tech/mongodb.svg' },
        ],
    },
};


export const PROJECTS = [
    {
        title: 'Project 1',
        imgPath: '/pics/project1.png',
        description: 'This is a project that I made for a client that wanted a website for his business',
        link: 'https://www.google.com',
    },
    {
        title: 'Project 1',
        imgPath: '/pics/project1.png',
        description: 'This is a project that I made for a client that wanted a website for his business',
        link: 'https://www.google.com',
    },
    {
        title: 'Project 1',
        imgPath: '/pics/project1.png',
        description: 'This is a project that I made for a client that wanted a website for his business',
        link: 'https://www.google.com',
    },
    {
        title: 'Project 1',
        imgPath: '/pics/project1.png',
        description: 'This is a project that I made for a client that wanted a website for his business',
        link: 'https://www.google.com',
    },
    {
        title: 'Project 1',
        imgPath: '/pics/project1.png',
        description: 'This is a project that I made for a client that wanted a website for his business',
        link: 'https://www.google.com',
    }
]