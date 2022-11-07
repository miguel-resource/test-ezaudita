import { NavLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';
//interfaces 
import { Route } from '../../models/Route';
//gsap
import { TweenMax, Power3, gsap } from 'gsap';


export default function Navbar(): JSX.Element {

  const routes: Array<Route> = [
    {
      label: "Tasks",
      to: "/task-list"
    },
    {
      label: "Api Movies",
      to: "/api-movies"
    },
    {
      label: "??",
      to: "/asd"
    },
  ]
  const activeCustom = "rounded-xl bg-zinc-900 text-slate-300 p-1 shadow-xl"
  const normal = "text-slate-300 p-1"
  const linkButtons = useRef<HTMLAnchorElement>(null)

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
    <div className='bg-zinc-800 p-3'>

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
    </div>
  )
}
