import ReduxIcon from "../images/icons/redux.svg";
import ChakraIcon from "../images/icons/chakra.svg";
import NextIcon from "../images/icons/next.svg";
import CypressIcon from "../images/icons/cypress.svg";
import MongoIcon from "../images/icons/mongo.svg";
import ReactIcon from "../images/icons/react.svg";
import TailwindIcon from "../images/icons/tailwind.svg";
import TypescriptIcon from "../images/icons/typescript.svg";
import ViteIcon from "../images/icons/vite.svg";
import RemixIcon from "../images/icons/remix.svg";
import SupabaseIcon from "../images/icons/supabase.svg";
import HTMLIcon from "../images/icons/html5.svg";
import CSSIcon from "../images/icons/css.svg";
import JavascriptIcon from "../images/icons/javascript.svg";

import gophyImg from "../images/projects/gophy.jpg";
import weatheriaImg from "../images/projects/weatheria.jpg";
import myMultiTwitchImg from "../images/projects/my-multi-twitch.jpg";
import cloverKingdomImg from "../images/projects/clover-kingdom.jpg";
import typerunImg from "../images/projects/typerun.jpg";
import basementStudioChallengeImg from "../images/projects/basement-studio-challenge.jpg";
import spaceTourismChallengeImg from "../images/projects/space-tourism-challenge.jpg";

import firstCertificate from "../images/certificates/first-certificate.jpg";

import type { ImageInputFormat } from "astro";


export interface ImageMetadata {
    src: string;
    width: number;
    height: number;
    format: ImageInputFormat;
    orientation?: number;
}

export interface TechnologyGroupItem {
    name: string;
    icon: {
        src: ImageMetadata;
        size: number;
        background?: boolean;
    };
}

export interface TechnologyGroup {
    name: string;
    items: TechnologyGroupItem[];
}

export interface Project {
    name: string;
    description: string;
    image: ImageMetadata;
    technologies: Array<TechnologyGroupItem>;
    repo: string;
    web?: string;
}

export interface Course {
    name: string;
    teachers: [string];
    certificateSrc: ImageMetadata;
    link: string;
}

export const languages = {
    en: {
        label: "ENG",
        code: "en",
        flag: "🇬🇧"
    },
    es: {
        label: "ESP",
        code: "es",
        flag: "🇪🇸"
    }
};

export const defaultLang = "en";

export const showDefaultLang = false;

export const technologyGroups: Record<string, TechnologyGroup[]> = {
    en: [
        {
            name: "languages",
            items: [
                {
                    name: "HTML5",
                    icon: { src: HTMLIcon, size: 24 },
                },
                {
                    name: "CSS3",
                    icon: { src: CSSIcon, size: 24 },
                },
                {
                    name: "JavaScript",
                    icon: { src: JavascriptIcon, size: 24 },
                },
                {
                    name: "TypeScript",
                    icon: { src: TypescriptIcon, size: 24 },
                },
            ],
        },
        {
            name: "frameworks",
            items: [
                {
                    name: "ReactJS",
                    icon: { src: ReactIcon, size: 24 },
                },
                {
                    name: "NextJS",
                    icon: { src: NextIcon, size: 24 },
                },
                {
                    name: "TailwindCSS",
                    icon: { src: TailwindIcon, size: 24 },
                },
                {
                    name: "ChakraUI",
                    icon: { src: ChakraIcon, size: 24 },
                },
            ],
        }

    ],
    es: [
        {
            name: "lenguajes",
            items: [
                {
                    name: "HTML5",
                    icon: { src: HTMLIcon, size: 24 },
                },
                {
                    name: "CSS3",
                    icon: { src: CSSIcon, size: 24 },
                },
                {
                    name: "JavaScript",
                    icon: { src: JavascriptIcon, size: 24 },
                },
                {
                    name: "TypeScript",
                    icon: { src: TypescriptIcon, size: 24 },
                },
            ],
        },
        {
            name: "frameworks",
            items: [
                {
                    name: "ReactJS",
                    icon: { src: ReactIcon, size: 24 },
                },
                {
                    name: "NextJS",
                    icon: { src: NextIcon, size: 24 },
                },
                {
                    name: "TailwindCSS",
                    icon: { src: TailwindIcon, size: 24 },
                },
                {
                    name: "ChakraUI",
                    icon: { src: ChakraIcon, size: 24 },
                },
            ],
        }

    ],
}

export const technologies: Record<string, TechnologyGroupItem> = {
    typescript: { name: "TypeScript", icon: { src: TypescriptIcon, size: 12 } },
    nextjs: { name: "NextJS", icon: { src: NextIcon, size: 12 } },
    supabase: { name: "Supabase", icon: { src: SupabaseIcon, size: 12 } },
    tailwindcss: { name: "TailwindCSS", icon: { src: TailwindIcon, size: 12 } },
    redux: { name: "Redux", icon: { src: ReduxIcon, size: 12 } },
    chakraui: { name: "ChakraUI", icon: { src: ChakraIcon, size: 12 } },
    mongodb: { name: "MongoDB", icon: { src: MongoIcon, size: 8 } },
    remix: {
        name: "Remix",
        icon: {
            src: RemixIcon,
            size: 6,
            background: true,
        },
    },
    cypress: { name: "Cypress", icon: { src: CypressIcon, size: 22 } },
    vite: { name: "Vite", icon: { src: ViteIcon, size: 12 } },
    react: { name: "React", icon: { src: ReactIcon, size: 12 } },
};

export const projects: Record<string, Project[]> = {
    en: [
        {
            name: "My Multi-Twitch",
            image: myMultiTwitchImg,
            description: `Multi-stream app. Users <span class="highlight">can 
                register with their twitch accounts</span> to watch the streamers they follow. 
                Users can also look up for other streams by using the
                <span class="highlight">search bar</span>.`,
            repo: "https://github.com/NewCastile/my-multi-twitch",
            web: "https://my-multi-twitch.vercel.app",
            technologies: [technologies.typescript, technologies.nextjs, technologies.supabase, technologies.tailwindcss, technologies.redux]

        },
        {
            name: "Clover Kingdom",
            image: cloverKingdomImg,
            description: `
            Manga reader where the chapters are grouped by arcs, each arc with
            its corresponding description, giving the oportunity to 
            <span class="highlight">download the chapters separately</span>.`,
            repo: "https://github.com/NewCastile/clover-kingdom",
            web: "https://clover-kingdom.vercel.app",
            technologies: [technologies.typescript, technologies.nextjs, technologies.chakraui, technologies.mongodb]
        },
        {
            name: "Weatheria",
            image: weatheriaImg,
            description: `
            Weather app where the users can look up for the weather of the city
            they want by using <span class="highlight">search bar</span>.
            This bar counts with an <span class="highlight">auto-complete box</span>
            to help the user look up for their city even faster. According 
            to the weather report 
            <span class="highlight">the app color theme will change</span>.`,
            repo: "https://github.com/NewCastile/weatheria",
            web: "https://weatheria-newcastile.vercel.app",
            technologies: [technologies.typescript, technologies.remix, technologies.chakraui]

        },
        {
            name: "Typerun",
            image: typerunImg,
            description: `<span class="highlight">Time-against of clock game</span> 
                where the users must type a word for each letter of the alphabet.
                At the end of the test, a log with the total time spend and the 
                <span class="highlight">definitions of each of the words entered
                and some examples</span> of these are detailed, this using the
                <span class="highlight">Free Dictionary API</span>.`,
            repo: "https://github.com/NewCastile/Typerun",
            web: "https://typerun.vercel.app",
            technologies: [technologies.typescript, technologies.nextjs, technologies.cypress, technologies.tailwindcss]
        },
        {
            name: "Gophy",
            image: gophyImg,
            description: `
            GIFs search app developed with the
            <span class="highlight">Giphy API</span>. Shows on screen a list of the 
            most popular GIFs by category <span class="highlight">allowing to continue
            the search by infinite scrolling</span>.`,
            repo: "https://github.com/NewCastile/gophy",
            web: "https://gophy.vercel.app",
            technologies: [technologies.typescript, technologies.react, technologies.vite, technologies.chakraui]
        },
        {
            name: "Space Tourism Challenge",
            image: spaceTourismChallengeImg,
            description: `
            Frontend Challenge taken from 
            <span class="highlight">Frontend Mentor</span>. 
            The challenge consist in creating a page for space tourism following all the
            documentation given, incluiding color codes, fonts and responsive design`,
            repo: "https://github.com/NewCastile/space-tourism-challenge",
            web: "https://space-tourism-challenge.vercel.app",
            technologies: [technologies.typescript, technologies.react, technologies.vite, technologies.tailwindcss]
        },
        {
            name: "Basement Studio Challenge",
            image: basementStudioChallengeImg,
            description: `
            Frontend Challenge taken from <span class="highlight">Basement Studio</span>. 
            The challenge consist in creating a simple e-commerce website where the user
            can <span class="highlight">store and remove products from a shopping car</span>.`,
            repo: "https://github.com/NewCastile/basement-studio-challenge",
            web: "https://basement-studio-challenge-hazel.vercel.app",
            technologies: [technologies.typescript, technologies.react, technologies.tailwindcss]
        },
    ],
    es: [
        {
            name: "My Multi-Twitch",
            image: myMultiTwitchImg,
            description: `Visor multi-stream. El usuario <span class="highlight">puede 
                regristrarse con su  cuenta de twitch</span> para poder 
                ver y seleccionar las <span class="highlight">transmisiones de 
                los streamers que sigue</span>. De cualquier forma podrá encontrar 
                otras transmisiónes con la 
                ayuda de una <span class="highlight">barra de búsqueda</span>.`,
            repo: "https://github.com/NewCastile/my-multi-twitch",
            web: "https://my-multi-twitch.vercel.app",
            technologies: [technologies.typescript, technologies.nextjs, technologies.supabase, technologies.tailwindcss, technologies.redux]

        },
        {
            name: "Clover Kingdom",
            image: cloverKingdomImg,
            description: `Lector de manga en donde se agrupan y describen los arcos de 
            cada serie presentada con sus respectivos capítulos <span class="highlight">ofreciendo 
            la oportunidad de descargarlos</span>.`,
            repo: "https://github.com/NewCastile/clover-kingdom",
            web: "https://clover-kingdom.vercel.app",
            technologies: [technologies.typescript, technologies.nextjs, technologies.chakraui, technologies.mongodb]
        },
        {
            name: "Weatheria",
            image: weatheriaImg,
            description: `Aplicación del clima en donde el usuario podrá conocer el clima 
            de la ciudad que desee mediante un <span class="highlight">buscador</span> que 
            cuenta con una <span class="highlight">caja de auto-completado</span>. Según el pronóstico 
            del clima la aplicación <span class="highlight">cambiará 
            de tema</span>.`,
            repo: "https://github.com/NewCastile/weatheria",
            web: "https://weatheria-newcastile.vercel.app",
            technologies: [technologies.typescript, technologies.remix, technologies.chakraui]

        },
        {
            name: "Typerun",
            image: typerunImg,
            description: `<span class="highlight">Juego contra-reloj</span> 
                en donde el usuario deberá escribir una palabra por cada letra del abecedario. 
                Se detallan al final el 
                <span class="highlight">tiempo total transcurrido</span>
                así como las <span class="highlight">deficiones y ejemplos de las palabras 
                </span> usando la <span class="highlight">Free Dictionary API</span>`,
            repo: "https://github.com/NewCastile/Typerun",
            web: "https://typerun.vercel.app",
            technologies: [technologies.typescript, technologies.nextjs, technologies.cypress, technologies.tailwindcss]
        },
        {
            name: "Gophy",
            image: gophyImg,
            description: `Buscador de GIFs utilizando la <span class="highlight">Giphy API</span>. Muestra en pantalla los GIFs 
            más populares según su categoría <span class="highlight">pudiendo ampliar 
                los resultados mediante scrolleo infinito</span>.`,
            repo: "https://github.com/NewCastile/gophy",
            web: "https://gophy.vercel.app",
            technologies: [technologies.typescript, technologies.react, technologies.vite, technologies.chakraui]
        },
        {
            name: "Space Tourism Challenge",
            image: spaceTourismChallengeImg,
            description: `Desafío frontend tomado de la página de <span class="highlight">Frontend 
                Mentor</span>. Consiste en una página para turismo 
                espacial estilizada siguiendo toda la documentación ofrecida incluyendo código de 
                colores, fuentes y diseño responsive.`,
            repo: "https://github.com/NewCastile/space-tourism-challenge",
            web: "https://space-tourism-challenge.vercel.app",
            technologies: [technologies.typescript, technologies.react, technologies.vite, technologies.tailwindcss]
        },
        {
            name: "Basement Studio Challenge",
            image: basementStudioChallengeImg,
            description: `Desafío frontend tomado de <span class="highlight">Basement Studio</span>. 
            Se trata de una plantilla de e-commerce sencilla en donde el usuario 
            podrá <span class="highlight">añadir y remover artículos de 
            un carrito de compras</span>.`,
            repo: "https://github.com/NewCastile/basement-studio-challenge",
            web: "https://basement-studio-challenge-hazel.vercel.app",
            technologies: [technologies.typescript, technologies.react, technologies.tailwindcss]
        },
    ]
}

export const certificates: Record<string, Course[]> = {
    en: [
        {
            name: "React - Difinitive Guide: hooks router redux next + projects",
            teachers: ["Nicholas Schurmann"],
            certificateSrc: firstCertificate,
            link: "https://www.udemy.com/course/react-guia-definitiva-hooks-router-redux-next-proyectos",
        },
    ],
    es: [
        {
            name: "React - Guía definitiva: hooks router redux next + Proyectos",
            teachers: ["Nicholas Schurmann"],
            certificateSrc: firstCertificate,
            link: "https://www.udemy.com/course/react-guia-definitiva-hooks-router-redux-next-proyectos",
        },
    ]
}

export const about: Record<string, string> = {
    en: `
        <p class="w-full text-center md:text-left">
            My interest for programming started with the release of the TV Show
            <span class="highlight">Mr Robot</span>. I started with Python but i
            founded too boring. I wanted something more
            <span class="highlight">interactive</span>, more
            <span class="highlight">visual</span>, then i met
            <span class="highlight">Javascript</span>.
        </p>
        <p class="w-full text-center md:text-left">
            From that point i´ve dedicated myself to study this language and with it,
            other technologies of its ecosystem, developing various projects along 
            the way focusing on <span class="highlight">UX/UI Design</span>.
        </p>
        <p class="w-full text-center md:text-left">
            Videogames, digital art, podcasts, anime and manga are some my hobbies 😉.
        </p>
    `,
    es: `
        <p class="w-full text-center md:text-left">
            Mi interés por la programación despertó junto con el lanzamiento de
            la serie <span class="highlight">Mr Robot</span>. Empecé con
            Python pero me pareció muy aburrido. Quería algo más
            <span class="highlight">interactivo</span>, más
            <span class="highlight">visual</span>, fue entonces cuando conocí
            <span class="highlight">JavaScript</span>.
        </p>
        <p class="w-full text-center md:text-left">
            Desde entonces me he dedicado a estudiar el lenguaje y su ecosistema
            desarrollando varias aplicaciones en el proceso enfocándome en el
            <span class="highlight">diseño UX/UI</span>.
        </p>
        <p class="w-full text-center md:text-left">
            Los videojuegos, el arte digital, los podcasts, el anime y el manga
            son algunos de mis pasatiempos 😉.
        </p>
    `
}

export const ui: Record<string, Record<string, string>> = {
    en: {
        "home.greet": "Hi, im Carlos",
        "home.charge": "Frontend Developer",
        "home.description": `
            Constantly learning about the new technologies joining the
            JavaScript ecosystem and web development.
        `,
        "home.links.companion.mail": "Contact me",
        "home.links.companion.linkedin": "LinkedIn",
        "home.links.companion.github": "Github",
        "projects.header": "Projects",
        "projects.sub-header": "Languages and frameworks",
        "projects.companion.links.repository": "Code",
        "projects.companion.links.web": "Web",
        "certificates.header": "Certificates",
        "certificates.companion.teachers": "Instructors",
        "certificates.companion.link": "Link",
        "about-me.header": "About me",
        "footer.companion.mail": "Contact me",
        "footer.companion.linkedin": "LinkedIn",
        "footer.companion.github": "Made by",
        "navbar.certificates": "Certificates",
        "navbar.projects": "Projects",
        "navbar.about-me": "About me",
        "navbar.home": "Home",
        "theme.light": "Light",
        "theme.dark": "Dark",
        "theme.system": "System",
    },
    es: {
        "home.greet": "Hola, soy Carlos",
        "home.charge": "Desarrollador Frontend",
        "home.description": `
            Constantemente investigando sobre las tecnologías que se van
            añadiendo al ecosistema de JavaScript y el desarrollo web en
            general.
        `,
        "home.links.companion.mail": "Contáctame",
        "projects.header": "Proyectos",
        "projects.sub-header": "Lenguajes y frameworks",
        "projects.companion.links.repository": "Código",
        "projects.companion.links.web": "Web",
        "certificates.header": "Certificados",
        "certificates.companion.teachers": "Instructores",
        "certificates.companion.link": "Dirección",
        "about-me.header": "Sobre mí",
        "footer.companion.mail": "Contáctame",
        "footer.companion.github": "Hecho por",
        "navbar.certificates": "Certificados",
        "navbar.projects": "Proyectos",
        "navbar.about-me": "Sobre mí",
        "navbar.home": "Inicio",
        "theme.light": "Claro",
        "theme.dark": "Oscuro",
        "theme.system": "Sistema",
    }
}

export const routes: Record<string, Record<string, string>> = {
    en: {
        "projects": "#projects",
        "certificates": "#certificates",
        "about-me": "#about-me",
        "home": "#home",
    },
    es: {
        "projects": "#proyectos",
        "certificates": "#certificados",
        "about-me": "#sobre-mi",
        "home": "#inicio",
    }
}