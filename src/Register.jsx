import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Register() {

    const [input, setInput] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
    })

    const hldChange = e => {
        setInput(prv => ({ ...prv, [e.target.name]: e.target.value }))
    }

    const hldSubmit = async (e) => {
        try {
            e.preventDefault()
            if (input.password !== input.confirmPassword) {
                return alert('Please check confirm password')
            }
            const rs = await axios.post('http://localhost:8000/auth/register', input)
            // console.log(rs)
            if (rs.status === 200) {
                alert('Register Successful')
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <form onSubmit={hldSubmit}>
            <div className="bg-white rounded-3xl p-8 shadow-lg border-myRed border-2">
                <h1 className="text-4xlfont-bold text-center mb-6 text-black" >SIGN UP</h1>
                <div className="">
                    <input name='username' value={input.username} onChange={hldChange} placeholder='USERNAME' type="text" className="block w-72 py-2.5 pl-3 pr-9 text-sm text-black rounded-xl border-2 " />
                    <div className="relative -top-7 left-64">
                        <img src="src\assets\icons\user.png" alt="name" />
                    </div>
                </div>
                <div className="">
                    <input name='email' value={input.email} onChange={hldChange} placeholder='EMAIL' type="email" className="block w-72 py-2.5 pl-3 pr-9 text-sm text-black rounded-xl border-2 " />
                    <div className="relative -top-7 left-64">
                        <img src="src\assets\icons\email.png" alt="email" />
                    </div>
                </div>
                <div className="">
                    <input name='password' value={input.password} onChange={hldChange} placeholder='PASSWORD' type="password" className="block w-72 py-2.5 pl-3 pr-9 text-sm text-black rounded-xl border-2 " />
                    <div className="relative -top-7 left-64">
                        <img src="src\assets\icons\padlock.png" alt="password" />
                    </div>
                </div>
                <div className="">
                    <input name='confirmPassword' value={input.confirmPassword} onChange={hldChange} placeholder='CONFIRM PASSWORD' type="password" className="block w-72 py-2.5 pl-3 pr-9 text-sm text-black rounded-xl border-2 " />
                    <div className="relative -top-7 left-64">
                        <img src="src\assets\icons\padlock.png" alt="password" />
                    </div>
                </div>
                <div className="items-center justify-center flex bg-myRed rounded-lg text-white cursor-pointer h-9 mb-2 hover:bg-myGreen hover:text-white">
                    <button type="submit">SIGN UP</button>
                </div>
                <div className="text-black">
                    <span>Already had account? <Link to='/login' className="text-blue-500 underline">Sign In</Link></span>
                </div>
            </div>
        </form>
    )
}
