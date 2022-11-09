import { useEffect, useRef } from "react";
import { Product } from "../../../models/Product";
import gsap, { Power3 } from 'gsap';
import { useDispatch } from "react-redux";
/* reducers */
import { addNewProduct } from './../../../redux/cart/cartSlice'



export default function Item({ rating ,title, image, price, description, id }: Product) {

    let refItem = useRef(null);
    const dispatch = useDispatch()

    useEffect(() => {
        gsap.fromTo(refItem, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 2, ease: Power3.easeInOut })
    }, []);

    const addCart = ():void => {
        dispatch(addNewProduct({
            rating,
            title,
            image,
            price,
            description, 
            id
        }))
    }

    return (
        <div
            ref={(el: any) => { refItem = el }}
            className="bg-slate-100 hover:scale-110  items-center h-80 rounded-xl  shadow-lg pointer">

            <img src={image} className="w-11/12 h-36 mx-auto block mt-2" />
            <h4
                className="text-sm leading-tight text-center w-11/12 mx-auto mt-3 font-medium mb-1">
                {title.slice(0, 30)}...
            </h4>

            <p className="text-orange-600 font-bold text-center">${ price }</p>
            <p className="text-gray-400 text-sm leading-4 text-center">{ description.slice(0, 47) }..</p>

            <button
                onClick={addCart}
                className="block rounded-md shadow text-sm bg-slate-300 w-6/12 ml-3 mt-6 mx-auto text-center">
                    <p
                        className="text-center">
                        Add
                    </p>
            </button>
        </div>
    )
}
