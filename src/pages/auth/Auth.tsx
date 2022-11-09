import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Account } from '../../models/Account';

/* models */

export default function Auth(): JSX.Element {
    
    const [account, setAccount] = useState<Account>({
        email: '',
        password: '',
    });
    const auth = getAuth();
    const navigate = useNavigate();

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
                className="text-center font-jetbrains text-slate-200 pt-5">
                Inicio de sesión
            </h4>

            <div
                className="w-1/2 p-1 mx-auto bg-zinc-900 rounded-lg shadow-xl">
                <form onSubmit={handleSubmit}>
                    <input
                        onChange={handleChange}
                        name="email"
                        placeholder="email"
                        type="email" />
                    <input
                        onChange={handleChange}
                        type="password"
                        name="password"
                        placeholder="password" />
                    <button>
                        LOGIN
                    </button>
                </form>
            </div>
        </div>
    )
}
