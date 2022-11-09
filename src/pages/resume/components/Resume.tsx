import { useEffect, useRef, useState } from "react";
import { FaMoon } from 'react-icons/fa'
import gsap, { Power3 } from 'gsap';
/* compoonents */
import Hello from "./Hello";
import Perfil from "./Perfil";

export default function Resuem() {

    const [theme, setTheme] = useState<string>('');
    let refWelcome = useRef(null)
    let refContent = useRef(null)

    useEffect(() => {
        if (theme == 'light') {
            document.documentElement.classList.add("dark");
        } else if (theme === '') {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
        animation();
    }, [theme])

    const hanleChangeTheme = (): void => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        animation();
    }

    const animation = (): void => {
        gsap.fromTo(refWelcome, { x: -300, opacity: 0 }, { x: 0, opacity: 1, duration: 1.3, ease: Power3.easeInOut })
    }

    return (
        <div
            ref={(el: any) => { refContent = el }}
            className="bg-slate-500 dark:bg-zinc-800 p-5 min-h-screen">

            {/* hello and dark theme */}
            <div
                ref={(el: any) => { refWelcome = el }}
                className="flex w-12/12">
                <button
                    className=' bg-red-300 block p-2 rounded-full shadow-sm dark:bg-slate-300 dark:text-stone-900 text-white'
                    onClick={hanleChangeTheme}>
                    <FaMoon></FaMoon>
                </button>

                <Hello></Hello>
            </div>

            {/* perfil */}
            <div>
                <Perfil></Perfil>
            </div>
        </div>
    )
}
