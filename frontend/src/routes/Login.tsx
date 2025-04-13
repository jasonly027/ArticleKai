import { ChangeEventHandler, useState } from "react"

export function Login() {
    const [userName, setUserName] = useState<string>("")
    const [password, setPassword] = useState<string>("")


    const handleLogin = () => {
        if (userName && password) {
            // repalce this actual functionallity
            console.log(userName + "     " + password)

        }
    }

    return (
        // entire login box
        <div className="flex flex-col items-center space-y-[1rem] my-[2rem] bg-gradient-to-r from-[#19c2e8] to-[#031cfc]">
            {/* email and password tags */}
            <div className="flex flex-col items-center space-y-4 py-5 ">
                <div>
                    <div className="">Email</div>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div>
                    <div>Password</div>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>

            </div>
            {/* Login button */}
            <button className = "cursor-pointer" onClick={handleLogin}>Login</button>
        </div>
    )
}