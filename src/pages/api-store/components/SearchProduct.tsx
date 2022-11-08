import React, { ChangeEvent, FormEvent, useRef, useState } from 'react'
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

    const handleChange = (e: ChangeEvent<any>): void => {
        gsap.to(refFilterProducts, { display: "block", ease: Power3.easeInOut, duration: 2 });
        console.log(e.target.name)
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }


    return (
        <>
            <form>
                <input onChange={handleChange} type="text" name='title' />
            </form>

            <div
                ref={(el: any) => { refFilterProducts = el }}
                className="hidden w-10/12 mx-auto">
                <FilterProducts
                    title={product.title}
                    price={product.price}
                    category={product.category}
                    description={product.description}
                    image={product.image}
                    rating={product.rating}></FilterProducts>
            </div>
        </>
    )
}
