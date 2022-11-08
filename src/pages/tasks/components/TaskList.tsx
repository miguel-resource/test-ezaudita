import { Link, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
//interfaces
import { Task } from '../../../models/Task';
//components
import TaskItem from "./TaskItem";


export default function TaskList(): JSX.Element {

    const tasks: Array<Task> = useSelector((data: any) => data.tasks)
    
    return (
        <div
            className="bg-zinc-700 h-full min-h-screen p-8">

            <div
                className="w-3/5 mx-auto">

                <Link
                    to="./create-task"
                    className="bg-blue-600 text-slate-200 p-3 ease-in hover:bg-blue-500 hover:shadow-3xl hover:scale-105 my-6 rounded-xl ">
                    + Add task
                </Link>

                <div className="mt-5 mb-6">
                    <Outlet ></Outlet>
                </div>

                {/* list task */}
                {tasks.map((task: Task) => {
                    return (
                        <TaskItem
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            description={task.description}
                            status={task.status}
                            priority={task.priority}></TaskItem>
                    )
                })}
                <div>

                </div>

            </div>

        </div>
    )
}
