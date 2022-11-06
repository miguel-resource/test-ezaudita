import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

//interfaces
import { Task } from './../../interfaces/Task';

//components
import TaskItem from "./TaskItem";

export default function TaskList(): JSX.Element {
    const navigate = useNavigate()
    const tasks: Array<Task> = useSelector((data: any) => data.tasks)

    const navigateForm = (): void => {
        navigate('/');
    }


    return (
        <div
            className="bg-zinc-700 h-screen">

            <div
                className="w-1/2 mx-auto">

                <button
                    onClick={navigateForm}
                    className="bg-blue-600 text-slate-200 p-4 my-6 rounded-xl ">
                    + Add task
                </button>

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
