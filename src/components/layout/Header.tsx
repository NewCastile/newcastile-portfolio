import { useEffect, useRef, useState } from "react";
import CloseIcon from "../icons/CloseIcon";
import HamburguerIcon from "../icons/HamburguerIcon";

interface NavItems {
    title: string;
    label: string;
    url: string;
}

const navItems: Array<NavItems> = [
    {
        title: "proyectos",
        label: "projects",
        url: "/#projects",
    },
    {
        title: "certificados",
        label: "certificates",
        url: "/#certificates",
    },
    {
        title: "Sobre mí",
        label: "about-me",
        url: "/#about-me",
    },
    {
        title: "Inicio",
        label: "home",
        url: "/#home",
    },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const [width, setWidth] = useState<number>(0)

    const observedRef = useRef<HTMLUListElement>(null)

    const callback = (entries: Array<ResizeObserverEntry>) => {
        const entry = entries[0];
        if (entry.contentBoxSize) {
            const contentBoxSize = Array.isArray(entry.contentBoxSize)
                ? entry.contentBoxSize[0]
                : entry.contentBoxSize;
            setWidth(contentBoxSize.inlineSize);
        } else {
            //
        }
    }

    useEffect(() => {
        document.addEventListener("keyup", (event) => {
            if (event.key == "Escape") {
                setIsOpen(false)
            }
        })
    }, [])

    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
            callback(entries)
        })

        if (observedRef.current) observer.observe(observedRef.current)

        return () => {
            setWidth(0)
            observer.disconnect()
        }
    }, [isOpen])

    useEffect(() => {
        if (!width) {
            setIsOpen(false)
        }
    }, [width])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = "hidden"
        } else {
            document.body.style.overflowY = "auto"
        }

    }, [isOpen])

    const navbarButtonOnClickHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header
            className="fixed top-0 z-10 flex w-full flex-row items-center justify-center px-10 py-2 mobile:px-0 mobile:py-0"
        >
            <button className="absolute top-14 right-10 z-10 block sm:hidden rounded-full bg-slate-400/30 backdrop-blur p-4 focus:outline-none" onClick={(e) => {
                e.preventDefault()
                navbarButtonOnClickHandler()
            }}>
                {isOpen ? <CloseIcon /> : <HamburguerIcon />}
            </button>
            <nav
                className="bg-white/40 backdrop-blur shadow-lg ring-1 ring-white/10 w-max hidden sm:flex flex-row justify-center items-center gap-8 font-bold rounded-md py-4 px-8"
            >
                {
                    navItems.map((link, linkIdx) => (
                        <a
                            key={linkIdx}
                            className="uppercase transition w-max text-sm"
                            aria-label={link.label}
                            href={link.url}
                        >
                            {link.title}
                        </a>
                    ))
                }
            </nav>
            {isOpen && <ul ref={observedRef} className={
                'z-5 animate-fade-in backdrop-blur-xl absolute right-0 top-0 bg-slate-400/60 flex h-screen w-full flex-col items-center justify-center gap-8 py-10 px-16 sm:hidden'
            }>
                {
                    navItems.map((link, linkIdx) => (
                        <li key={linkIdx}>
                            <span
                                role="link"
                                className="w-full uppercase font-bold transition text-lg text-left cursor-pointer"
                                aria-label={link.label}
                                onClick={() => {
                                    navbarButtonOnClickHandler()
                                    window.location.href = link.url
                                }}
                            >
                                {link.title}
                            </span>
                        </li>
                    ))
                }
            </ul>}
        </header >
    )
}

export default Header

