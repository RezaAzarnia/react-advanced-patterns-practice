import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../zustand/userStore";
import Input from "./Input";

export default function Login() {
  const [userName, setUserName] = useState<string>("");
  const navigate = useNavigate();
  const adduserName = useUserStore(state => state.addUserName)
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
          adduserName(userName, "fatane")
          navigate("/", { replace: true });
        }}
      >
        login
      </button>
    </div>
  );
}
