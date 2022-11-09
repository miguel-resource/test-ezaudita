import { useEffect, useState } from "react";
/* models */
import { Product } from "../../../models/Product";
import { FilterProduct } from "../../../models/FilterProducts";
/* services */
import { getAll, getByCategory } from './../../../services/productsService';
/* components */
import Item from "./Item";


export default function FilterProducts({ title, price, category, description, image, rating }: Product) {

  const [products, setProducts] = useState<Product[]>([]);
  getAll().then(products => {
    setProducts(products.data)
  })
  const data = products.filter((product: Product) => {
    if (title === '') {
      return product
    } else {
      return product.title.toLocaleLowerCase().includes(title)
    }
  })

  return (
    <div>
      {data.length > 0 ?
        <h3></h3> : <h3>no sé encontró...</h3>}

      <div
        className="grid grid-cols-2 gap-2 | sm:grid-cols-3 sm:gap-8 | md:grid-cols-4 | lg:gap-12 ">

        {data.map((product: Product) => {
          return (
            <Item key={product.id} title={product.title} price={product.price} category={product.category} description={product.description} image={product.image} rating={product.rating}></Item>

          )
        })}
      </div>
    </div>
  )
}
