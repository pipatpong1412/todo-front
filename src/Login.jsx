import { Link } from "react-router-dom";
import { useState } from 'react'
import axios from 'axios'

export default function Login() {

    const [input, setInput] = useState({
        username: '',
        password: ''
    })

    const hldChange = e => {
        setInput(prv => ({ ...prv, [e.target.name]: e.target.value }))
    }

    const hldSubmit = async (e) => {
        try {
            e.preventDefault()
            const rs = await axios.post('http://localhost:8000/auth/login', input)
            // console.log(rs.data.token)
            localStorage.setItem('token', rs.data.token)
            if (rs.status === 200) {
                alert('Login Successful')
            }
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <form onSubmit={hldSubmit}>
            <div className="bg-white rounded-3xl p-8 shadow-lg border-myRed border-2">
                <h1 className="text-4xlfont-bold text-center mb-6 text-black" >SIGN IN</h1>
                <div className="">
                    <input name='username' value={input.username} onChange={hldChange} placeholder='USERNAME' type="text" className="block w-72 py-2.5 pl-3 pr-9 text-sm text-black rounded-xl border-2 border-regal-blue" />
                    <div className="relative -top-7 left-64 filter">
                        <img src="src/assets/icons/user.png" alt="user" />
                    </div>
                </div>
                <div className="">
                    <input name='password' value={input.password} onChange={hldChange} placeholder='PASSWORD' type="password" className="block w-72 py-2.5 pl-3 pr-9 text-sm text-black rounded-xl border-2 border-regal-blue" />
                    <div className="relative -top-7 left-64">
                        <img src="src/assets/icons/padlock.png" alt="password" />
                    </div>
                </div>
                <div className="items-center justify-center flex bg-myRed rounded-lg text-white cursor-pointer h-9 mb-2 hover:bg-myGreen hover:text-white">
                    <button type="submit">SIGN IN</button>
                </div>
                <div className="text-black">
                    <span>New Here? <Link to='/register' className="text-blue-500 underline">Create an Account</Link></span>
                </div>
            </div>
        </form>
    )
}
