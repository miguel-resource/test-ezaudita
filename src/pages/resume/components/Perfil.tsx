import gsap, { Power3 } from 'gsap';
import { useEffect, useRef } from 'react';
import { FaHeart } from 'react-icons/fa'

export default function Perfil() {
    let refImage = useRef(null)
    let refTitle = useRef(null)
    let refContent = useRef(null)

    useEffect(() => {
        gsap.fromTo(refImage, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.6, ease: Power3.easeInOut })
        gsap.fromTo(refTitle, { x: -40, delay: 1.3, opacity: 0 }, { x: 0, opacity: 1, duration: 1.3, ease: Power3.easeInOut })
        gsap.fromTo(refContent, { x: -40, delay: 1.3, opacity: 0 }, { x: 0, opacity: 1, duration: 1.3, ease: Power3.easeInOut })
        gsap.fromTo(".description", { x: -80, delay: 1.3, opacity: 0 }, { x: 0, opacity: 1, delay: .5,duration: 1.3, ease: Power3.easeInOut })
        gsap.fromTo(".bio", { x: -80, delay: 1.3, opacity: 0 }, { x: 0, opacity: 1, delay:.9, duration: 1.3, ease: Power3.easeInOut })
        gsap.fromTo(".hobbies", { x: -80, delay: 1.3, opacity: 0 }, { x: 0, opacity: 1,delay:1.4, duration: 1.3, ease: Power3.easeInOut })
    }, [])

    return (
        <section
            className="w-12/12 mx-auto mt-9">
            <div
                className="grid mx-auto |  sm:grid-cols-2 | md:w-10/12 | lg:w-11/12">
                <img
                    ref={(el: any) => { refImage = el }}
                    src="https://firebasestorage.googleapis.com/v0/b/test-ezaudita.appspot.com/o/perfil.jpg?alt=media&token=43c3c1e5-26de-4653-a0f6-05c242f45a4b"
                    className="image w-36 block mx-auto rounded-md shadow-xl flex-0 | sm:w-40 md:w-44 " />
                <div
                    className="flex-1 mt-2 mx-auto font-jetbrains  text-slate-100 top-80 p-2  text-left">
                    <h3
                        ref={(el: any) => { refTitle = el }}
                        className="font-semibold font-jetbrains tracking-widest">
                        Fullstack Developer / Angular Frontend
                    </h3>

                    {/* description */}
                    <section className="description">
                        <h3 className=" text-pink-600 dark:text-blue-400 w-5/12 font-semibold border-b-2 mt-3 dark:border-zinc-600">Description:  </h3>
                        <p
                            className="text-xs w-9/12 leading-6 font-italic">

                            I am a software developer, I have two
                            years of experience with academic projects, of
                            a personal nature and by working with local
                            companies. I like to work in a team, collaborate
                            and contribute ideas, but above all I distinguish
                            myself by never stopping learning and
                            becoming a self-taught person.
                        </p>
                    </section>

                    {/* bio */}
                    <section className='bio mt-5'>
                        <h3 className="text-pink-600 dark:text-blue-400 w-5/12 font-semibold border-b-2 mt-3 dark:border-zinc-600">
                            Bio:
                        </h3>
                        <ol
                            className="mt-2 text-xs">
                            <li>
                                <span className="dark:text-purple-400 float-left font-semibold text-xs text-zinc-300">2020:</span>
                                <p className="text-xs">I started as freelance developer.</p>
                                <ol
                                    className="ml-3 font-medium">
                                    <li className="">-E-commerc</li>
                                    <li className="">-Blog </li>

                                    <li className="">-Portfolio</li>
                                </ol>
                            </li>
                            <li
                                className="mt-1">
                                <span className="dark:text-purple-400 float-left font-semibold text-xs text-zinc-300">Actually:</span>
                                <p className="text-xs">I started in Tecbinet as Fullstck developer.</p>
                            </li>
                        </ol>
                    </section>

                    {/* <3 */}
                    <section
                        className="hobbies">
                        <h3 className="text-pink-600 dark:text-blue-400 w-5/12 font-semibold border-b-2 mt-5 dark:border-zinc-600 pb-1">
                            <FaHeart>   </FaHeart>
                        </h3>
                        <p
                            className="ml-5 text-xs mt-1">
                            Read,  Music, <a className="text-pink-600 dark:text-purple-400" href="https://github.com/miguel-resource" target="_blank">Code</a>, Sport, Memes.
                        </p>
                    </section>
                </div>
            </div>

        </section>
    )
}
