import { useState } from "react";

export default function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  function onClick() {
    if (email == "") {
    }
    if (password == "") {
    }
  }
  return (
    <>
      <div className="login">
        <input
          type="email"
          placeholder="email"
          value={email} // passato quando c'è onChange
          onChange={function (e) {
            setEmail(e.target.value); // cambiamo lo stato ad email in modo tale che quando clicco sul campo
            // posso inserire la mail
          }}
        ></input>
        <input
          type="password"
          placeholder="password"
          value={password} // passato quando c'è onChange
          onChange={function (e) {
            setPassword(e.target.value); // cambiamo lo stato a pw in modo tale che quando clicco sul campo
            // posso inserire la pw
          }}
        ></input>
        <button className="login-button"> LOGIN </button>
      </div>
    </>
  );
}
