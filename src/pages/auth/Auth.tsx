import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Account } from '../../models/Account';
import gsap,{ Power3 } from 'gsap';
import { activate } from 'firebase/remote-config';

/* models */

export default function Auth(): JSX.Element {
    
    const [account, setAccount] = useState<Account>({
        email: '',
        password: '',
    });
    const auth = getAuth();
    const navigate = useNavigate();
    let refAuth = useRef(null)

    useEffect(() => {
        gsap.to(refAuth ,{
            opacity: 1,scale: 1, duration: 1, ease: Power3.easeInOut
        })
    }, [])

    const handleChange = (e: ChangeEvent<any>): void => {
        setAccount({
            ...account,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<any>): void => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, account.email, account.password).then(() => {
            navigate('/')
        }).catch((error) => {
            console.error(error)
        })
    }

    const validate = ():boolean => {
        if (account.email && account.password) {
            return true
        } else {
            return false
        }
    }

    return (
        <div
         
            className="bg-zinc-700 h-screen">
            <h4
                className="text-center text-xl mb-3 font-jetbrains text-slate-200 pt-5 ">
                Inicio de sesión
            </h4>

            <div
                   ref={(el:any) => {refAuth = el }}
                className="w-1/2 mx-auto bg-zinc-900 rounded-lg shadow-xl p-9 opacity-0 scale-0">
                <form 
                
                onSubmit={handleSubmit}>
                    <input
                        className="block w-full h-9 p-1 bg-stone-600 rounded-md mb-4 text-slate-200"
                        onChange={handleChange}
                        name="email"
                        placeholder="email"
                        type="email" />
                    <input
                        className="block w-full h-9 p-1 bg-stone-600 rounded-md mb-4 text-slate-200"
                        onChange={handleChange}
                        type="password"
                        name="password"
                        placeholder="password" />
                    <button
                        disabled={!validate()}
                        className="shadow-xl hover:scale-105 duration-150 ease-in-out w-1/2 mx-auto p-1 rounded-md block text-center bg-emerald-400">
                        LOGIN
                    </button>
                </form>
            </div>
        </div>
    )
}
