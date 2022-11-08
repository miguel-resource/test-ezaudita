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
            className="banner opacity-0 rounded-xl bg-[url('/src/assets/imgs/banner.jpg')] bg-cover mx-auto h-60  shadow-xl  w-11/12 pt-9 p-10">
            <h3
                className="bg-slate-800 text-white p-2 font-mono font-semibold text-xl  w-1/4 mt-12">
                New Clothes!!
            </h3>
            <h3
                className="bg-orange-600 shadow-lg text-white p-2 font-mono font-semibold text-xl  w-3/6 mt-2">
                Easy way to check and shop our products!
            </h3>
        </div>
    )
}
