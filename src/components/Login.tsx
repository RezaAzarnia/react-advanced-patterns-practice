import { useState } from "react";
import { addUserName } from "../Redux/features/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatchAction } from "../hooks/useRedux";
import Input from "./Input";

export default function Login() {
  const [userName, setUserName] = useState<string>("");
  const dispatch = useDispatchAction();
  const navigate = useNavigate();
  return (
    <div>
      <h1>login please</h1>
      <Input
        name="userName"
        label="please enter user name"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />
      <button
        onClick={() => {
          dispatch(addUserName(userName, "fatane"));
          navigate("/", { replace: true });
        }}
      >
        login
      </button>
    </div>
  );
}
