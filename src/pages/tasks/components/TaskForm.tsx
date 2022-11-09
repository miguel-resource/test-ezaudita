import { FormEvent, useEffect, useState, ChangeEvent, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import gsap, { Power3 } from 'gsap';
import { useNavigate, useParams } from "react-router-dom";
//interfaces
import { Task } from "../../../models/Task";
//reducers 
import { addTask, editTask } from '../../../redux/tasks/taskSlice'


export default function TaskForm():JSX.Element {
    const dispatch = useDispatch()
    const defaultState: Task = {
        title: "",
        description: "",
        priority: ""
    }
    const [task, setTask] = useState<Task>(defaultState)
    const params = useParams()
    const tasks: Array<Task> = useSelector((data: any) => data.tasks)
    let refForm = useRef(null)
    const navigate = useNavigate()

    useEffect((): void => {

        if (params.id) {
            const findTask = tasks.find((task: Task) => task.id === params.id)
            findTask ? setTask(findTask) : setTask(defaultState)
        }
        gsap.to(
            refForm,
            {
                opacity: 1,
                duration: 1,
                ease: Power3.easeIn
            },
        );
    }, [])

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (params.id) {
            dispatch(editTask({
                ...task
            }))
        } else {
            dispatch(addTask({
                ...task,
                id: uuid(),
                status: false
            }));
            setTask(defaultState);
        }
        navigate('../')
    }

    const handleChange = (e: ChangeEvent<any>): void => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const validate = (): boolean => {
        if (task.title && task.description && task.priority) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div
            ref={(el: any) => { refForm = el }}
            className={`bg-stone-800 rounded-xl p-4 shadow-xl opacity-0`}>
            {
                params.id 
                    ?
                    <h3 className="text-slate-200 font-jetbrains mb-2 text-center">
                        Edit Task
                    </h3>
                    :
                    <h3
                        className="text-slate-200 font-jetbrains mb-2 text-center">
                        Add new task
                    </h3>
            }
            <form onSubmit={handleSubmit} className="w-full">
                <input
                    type="text"
                    value={task.title}
                    onChange={handleChange}
                    placeholder="Title"
                    name="title"
                    className="w-full bg-zinc-500 rounded-sm p-1 text-slate-300 outline-none font-semibold text-sm mb-2" />
                <textarea
                    onChange={handleChange}
                    placeholder="Description"
                    value={task.description}
                    name="description"
                    className="w-full bg-zinc-500 rounded-sm p-1 text-slate-300 outline-none font-semibold text-sm mb-2 h-28" />
                <select value={task.priority} onChange={handleChange} className="w-full bg-zinc-500 rounded-sm p-1 text-slate-300 outline-none font-semibold text-sm mb-2" name="priority">
                    <option value="" className="text-slate-400"  hidden>Choose a priority</option>
                    <option value="high" >High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>

                <button
                    disabled={!validate()}
                    className="mx-auto w-1/5 rounded-md text-center bg-slate-700 text-sm p-1 text-slate-200 hover:scale-105 duration-200 ease-in">
                    + Task
                </button>
            </form>
        </div>
    )
}
