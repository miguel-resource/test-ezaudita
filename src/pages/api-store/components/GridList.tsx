import { useEffect, useRef, useState } from "react"
import { SearchProduct } from "../../../models/SearchProduct";
import gsap, { Power3 } from 'gsap';
/* services */
import { getByCategory } from './../../../services/productsService';
/* models */
import { Product } from "../../../models/Product";
import Item from "./Item";

export default function GridList({ category }: SearchProduct): JSX.Element {

    let refGrid = useRef(null)
    const [data, setData] = useState<Product[]>([])

    useEffect(() => {
        getByCategory(category).then((response: any) => {
            setData(response.data)
        })
        gsap.fromTo(refGrid, { x: -30, opacity: 0 }, { opacity: 1, x: 0, duration: 2, ease: Power3.easeInOut })
    }, [])

    return (
        <div
            ref={(el: any) => { refGrid = el }}
            className="w-10/12 mx-auto mt-12">

            <h3
                className="uppercase tracking-widest mb-4">
                {category}
            </h3>

            <div
                className="grid grid-cols-4 gap-2">
                {data.map((data: Product) => {
                    return (
                        <Item
                            key={data.id}
                            title={data.title}
                            price={data.price}
                            category={data.category}
                            description={data.description}
                            image={data.image}
                            rating={data.rating}></Item>
                    )
                })}
            </div>

        </div>
    )
}
