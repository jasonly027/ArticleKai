import { useLocation, useNavigate } from "react-router-dom"
import { getQuizzes, signOut } from "../lib/supabase"
import { useAuth } from "../providers/AuthProvider"



export function NavBar() {
    const navigate = useNavigate()
    const { user } = useAuth()

    const handleLogOut = async () => {
        await (signOut())
        navigate("/login")
    }

    const handleQuizHistory = async () => {

        navigate("/history")
    }

    const handleGenerate = () => {
        navigate("/generate")
    }



    return (
        <div className={`flex justify-evenly text-white w-full bg-gradient-to-r from-blue-400 to-[#81b1ce] text-md font-semibold p-4`}>

            <div className="flex w-full space-x-4">
                <button onClick={handleGenerate} className="cursor-pointer flex">Generate</button>
                <button onClick={handleQuizHistory} className="cursor-pointer flex">Quiz History</button>
            </div>


            <div className="cursor-default flex justify-center w-full">{user?.email}</div>

            <div className="flex justify-end w-full">
                <div className="flex"></div>
                <button onClick={handleLogOut} className="flex cursor-pointer items-center space-x-1">
                    <div>Log Out</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                    </svg>
                </button>
            </div>



        </div>
    )
}