import { Task } from "./../../../models/Task";
import { useDispatch } from 'react-redux';
import { deleteTask, completeTask } from './../../../redux/tasks/taskSlice'
import { useEffect, useRef, useState } from "react";
import gsap, { Power3 } from 'gsap';
import TaskForm from './TaskForm'
import { Link, useNavigate } from "react-router-dom";

export default function TaskItem({ title, description, id, priority, status }: Task) {

    const dispatch = useDispatch()
    
    let refItem = useRef(null)
    let refStatus = useRef(null)
    let refComplete = useRef(null)

    useEffect(() => {
        
        gsap.to(
            refItem,
            {
                scale: 1,
                duration: 1,
                ease: Power3.easeOut
            }
        );
    }, [])

    const remove = (id?: string): void => {
        if (id) {
            gsap.to(refItem, { x: -1000, duration: 1, ease: Power3.easeOut })
            setTimeout(() => {
                dispatch(deleteTask(id))
            }, 200)
        }
    }

    const complete = (id?: string): void => {
        if (id) {
            setTimeout(() => dispatch(completeTask(id)), 300)
            gsap.fromTo(refStatus, { x: -900, ease: Power3.easeInOut }, { x: 0, ease: Power3.easeOut })
            gsap.to(refComplete, { opacity: 0, display: 'none', ease: Power3.easeInOut, duration: 1 })
        }
    }

    

    return (
        <>
            <div
                ref={(el: any) => { refItem = el }}
                className="bg-stone-800 shadow-xl rounded-lg p-3 text-slate-300 mb-2 scale-0">

                {/* title and action delete */}
                <div className="flex">
                    <h3
                        className="tracking-wide font-bold font-mono flex-1">
                        {title}
                    </h3>

                    <button
                        className="rounded-lg ease-in-out duration-300 hover:scale-105 font-semibold shadow-xl  
                        p-1 bg-red-700 shadown-lg w-2/6 text-sm flex-none"
                        onClick={() => remove(id)}>
                        DELETE
                    </button>
                </div>

                {/* status and priority */}
                <div
                    className="grid grid-cols-2 font-semibold  text-sm mt-2">
                    <h3
                        className={""
                            + (priority === "low" ? "text-green-700" : "")
                            + (priority === "high" ? "text-red-600" : "")
                            + (priority === "medium" ? "text-yellow-700" : "")}>
                        {priority}
                    </h3>

                    <div
                        ref={(el: any) => { refStatus = el }}>

                        {status ?
                            <h3
                                className="text-center text-sm text-green-300">
                                COMPLETE
                            </h3>
                            :
                            <h3
                                className="text-center text-sm text-slate-400">
                                INCOMPLETE
                            </h3>
                        }

                    </div>
                </div>

                {/* description */}
                <div
                    className="mt-2 font-bold text-sm">
                    <p>
                        * {description}.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-2 text-sm mt-2">
                    <button
                        ref={(el: any) => { refComplete = el }}
                        onClick={() => complete(id)}
                        className="bg-green-900 p-1 rounded-lg hover:scale-105 duration-200 ease-in  ">
                        Completed
                    </button>

                    <Link
                        to={`/task-list/edit-task/${id}`}
                        className="bg-slate-700 text-center hover:scale-105 duration-200 ease-in p-1 rounded-lg">
                        Edit
                    </Link>
                </div>
            </div>

        </>
    )
}
