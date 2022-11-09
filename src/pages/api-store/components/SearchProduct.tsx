import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import gsap, { Power3 } from 'gsap';
/* models */
import { Product } from '../../../models/Product';
/* components */
import FilterProducts from './FilterProduct';


export default function SearchProduct(): JSX.Element {

    const [product, setProduct] = useState<Product>({
        title: "",
        description: '',
        price: 0,
        category: "",
        image: "",
        rating: {
            rate: 0,
            count: 0
        }
    })
    let refFilterProducts = useRef(null);
    let refInput = useRef(null);

    useEffect(() => {
        gsap.fromTo(refInput, { x: -500, opacity:0 }, { x:0, opacity:1 , duration: 1.2, ease: Power3.easeInOut })
    }, [])

    const handleChange = (e: ChangeEvent<any>): void => {
        gsap.to(refFilterProducts, { display: "block", ease: Power3.easeInOut, duration: 1 });
        console.log(e.target.name)
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }


    return (
        <>
            <div
                className="mx-auto w-10/12 mt-5">

                <form>
                    <input
                        ref={(el: any) => { refInput = el }}
                        placeholder="search product..."
                        onChange={handleChange}
                        className='w-10/12 p-1 outline-none rounded-md shadow-xl'
                        type="text"
                        name='title' />
                </form>

                <div
                    ref={(el: any) => { refFilterProducts = el }}
                    className="hidden mt-10 mx-auto">
                    <FilterProducts
                        title={product.title}
                        price={product.price}
                        category={product.category}
                        description={product.description}
                        image={product.image}
                        rating={product.rating}></FilterProducts>
                </div>
            </div>
        </>
    )
}
