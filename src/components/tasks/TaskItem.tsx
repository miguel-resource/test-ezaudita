import { Task } from "../../interfaces/Task";
import { useDispatch } from 'react-redux';
import { deleteTask } from './../../features/tasks/taskSlice'


export default function TaskItem({ title, description, id }: Task) {

    const dispatch = useDispatch()

    const remove = (id?: string): void => {

        if (id) {
            dispatch(deleteTask(id))
        }
    }


    return (
        <div
            className="bg-stone-800 shadow-xl rounded-lg p-3 text-slate-300 mb-5">


            <div className="grid grid-cols-2">
                <h3
                    className="tracking-wide font-bold font-mono">
                    {title}
                </h3>

                <button
                    className="block rounded-2xl  p-1 bg-red-900 shadown-lg w-1/2 mx-20 text-sm"
                    onClick={() => remove(id)}>
                    delete
                </button>
            </div>

            <div>

            </div>
        </div>
    )
}
