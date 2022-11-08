import { useEffect, useRef } from 'react';
import gsap, { Power3 } from 'gsap';
import { FaArrowDown } from 'react-icons/fa'
//components
import Banner from './Banner';
//services
import { getAll } from '../../../services/productsService';
import GridList from './GridList';
import { Link, Outlet } from 'react-router-dom';

export default function ProductsList(): JSX.Element {

  let refSearch = useRef(null)

  useEffect(() => {
    gsap.fromTo(refSearch, { opacity: 0 }, { opacity: 1,duration:2, ease: Power3.easeInOut })
  }, [])

  return (
    <div
      className="bg-zinc-300 pt-4 min-h-screen ">
      {/* banner */}
      <Banner></Banner>

      <Link
        ref={(el: any) => { refSearch = el }}
        className="block w-11 shadow-xl text-zinc-600 mt-4 p-3 mx-auto bg-slate-200 rounded-3xl hover:scale-110 duration-200 ease-in-out "
        to="./search">
        <FaArrowDown className="inline mr-2"></FaArrowDown> 
      </Link>

      <Outlet></Outlet>

      {/* grids of categories products */}
      {/* jewelery */}
      <GridList category="jewelery"></GridList>

      {/* women's clothing */}
      <GridList category="women's clothing"></GridList>

      {/* jewelery */}
      <GridList category="men's clothing"></GridList>

      {/* jewelery */}
      <GridList category="electronics"></GridList>
    </div>
  )
}