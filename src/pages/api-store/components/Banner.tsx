import gsap, { Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';


export default function Banner() {

    let refBanner = useRef(null)
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        const el = refBanner.current
        gsap.to(el, { opacity: 1, duration: 2, ease: Power3.easeInOut, scrollTrigger: { trigger: el}})
    }, [])


    return (
        <div
            ref={refBanner}
            className="banner opacity-0 rounded-xl bg-[url('/src/assets/imgs/banner.jpg')] text-md bg-cover mx-auto h-60  shadow-xl  w-11/12 pt-9 p-10  | sm:text-lg lg:h-64 ">
            <h3
                className="bg-slate-800 text-white p-2 font-mono font-semibold w-1/2  mt-20  | md:w-2/6 | lg:w-1/6  lg:mt-20">
                New Clothes!!
            </h3>
            <h3
                className="bg-orange-600 shadow-lg text-white p-2 font-mono font-semibold w-2/2 mt-2 |  md:w-3/5 | lg:w-2/5">
                Easy way to check and shop our products!
            </h3>
        </div>
    )
}
