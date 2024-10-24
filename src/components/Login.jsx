import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserName } from "../Redux/features/userSlice";

export default function Login() {
    const [userName, setUserName] = useState("");
    const dispatch = useDispatch()
    return (
        <div>
            <h1>login please</h1>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
            <button onClick={() => dispatch(addUserName(userName))}>go to</button>
        </div>
    )
}
