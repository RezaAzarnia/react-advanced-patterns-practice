import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserName } from "../Redux/features/userSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [userName, setUserName] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div>
            <h1>login please</h1>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
            <button onClick={() => {
                dispatch(addUserName(userName, "fatane"))
                navigate("/", { replace: true })
            }}>go to</button>

        </div>
    )
}
