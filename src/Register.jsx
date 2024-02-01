import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <form action="">
            <div className="bg-white rounded-3xl p-8 shadow-lg border-myRed border-2">
                <h1 className="text-4xlfont-bold text-center mb-6 text-black" >SIGN UP</h1>
                <div className="">
                    <input placeholder='USERNAME' type="text" className="block w-72 py-2.5 pl-3 pr-9 text-sm text-black rounded-xl border-2 " />
                    <div className="relative -top-7 left-64">
                        <img src="src\assets\icons\user.png" alt="name" />
                    </div>
                </div>
                <div className="">
                    <input placeholder='EMAIL' type="email" className="block w-72 py-2.5 pl-3 pr-9 text-sm text-black rounded-xl border-2 " />
                    <div className="relative -top-7 left-64">
                        <img src="src\assets\icons\email.png" alt="email" />
                    </div>
                </div>
                <div className="">
                    <input placeholder='PASSWORD' type="password" className="block w-72 py-2.5 pl-3 pr-9 text-sm text-black rounded-xl border-2 " />
                    <div className="relative -top-7 left-64">
                        <img src="src\assets\icons\padlock.png" alt="password" />
                    </div>
                </div>
                <div className="">
                    <input placeholder='CONFIRM PASSWORD' type="password" className="block w-72 py-2.5 pl-3 pr-9 text-sm text-black rounded-xl border-2 " />
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
