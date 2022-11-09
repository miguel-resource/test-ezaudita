import { NavLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { FaShoppingCart } from 'react-icons/fa'
//interfaces 
import { Route } from '../../models/Route';
//gsap
import { Power3, gsap } from 'gsap';
import { useSelector } from 'react-redux';
/* models */
import { Product } from '../../models/Product';


export default function Navbar(): JSX.Element {

  const auth = getAuth();
  const routes: Array<Route> = [
    {
      label: "Tasks",
      to: "/task-list"
    },
    {
      label: "Api Store",
      to: "/api-store"
    },
    {
      label: "Resume",
      to: "/resume"
    },
  ]
  const activeCustom = "rounded-xl bg-zinc-900 text-slate-300 p-1 shadow-xl"
  const normal = "text-slate-300 p-1"
  const linkButtons = useRef<HTMLAnchorElement>(null)
  const cart: Array<Product> = useSelector((data:any) => data.cart)

  useEffect(() => {
    gsap.to(
      linkButtons,
      .6,
      {
        opacity: 1,
        rotate: 45, 
        y: -20,
        ease: Power3.easeIn
      }
    )
  }, [])

  return (
    <div className='bg-zinc-800 p-3 flex'>

      <div className='grid grid-cols-3 gap-10 mx-auto w-8/12 text-center font-jetbrains'>
        {routes.map((route: Route, index: number) => {
          return (
            <NavLink
              key={index}
              ref={linkButtons}
              to={route.to}
              className={({isActive}) => (isActive ? activeCustom : normal)}>
              {route.label}
            </NavLink>
          )
        })}
      </div>

      <button
        onClick={() => signOut(auth)}
        className='text-center text-xs text-slate-200 '>
        Log-Out
      </button>

      <div
        className='flex w-20 text-white pt-2'>
          <FaShoppingCart className='block w-14'></FaShoppingCart>
          <p className='block text-sm'>
{cart.length}
          </p>
          
      </div>
    </div>
  )
}
