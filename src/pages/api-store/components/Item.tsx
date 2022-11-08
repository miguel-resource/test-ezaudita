import { useEffect, useRef } from "react";
import { Product } from "../../../models/Product";
import gsap, { Power3 } from 'gsap';


export default function Item({ title, image, price }: Product) {

    let refItem = useRef(null)

    useEffect(() => {
        gsap.fromTo(refItem, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 2, ease: Power3.easeInOut })
    }, []);

    return (
        <div
            ref={(el: any) => { refItem = el }}
            className="bg-slate-100 hover:scale-110  items-center h-72 rounded-xl  shadow-lg pointer">

            <img src={image} className="w-11/12 h-36 mx-auto block mt-2" />
            <h4
                className="text-sm leading-tight text-center w-11/12 mx-auto mt-3 font-medium mb-1">
                {title.slice(0, 30)}...
            </h4>

            <p
                className="text-orange-600 font-bold text-center">${ price }</p>
        </div>
    )
}
