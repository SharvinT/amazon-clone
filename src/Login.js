import React, { useState } from 'react';
import "./Login.css";
import {Link, useHistory } from "react-router-dom";
import {auth} from "./firebase";
function Login() {
    const [email, setEmail] = useState("");
    const history = useHistory();
    const [password, setPassword] = useState ("");
    const login = (event) => {
        event.preventDefault(); //This stop from refreshing the page

        // login logic
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
            // logged in redirect to home
            history.push("/");
        })
        .catch((e) => alert(e.message));
    };
    const register = (event) => {
        event.preventDefault(); //This stop from refreshing the page
        
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            // Created user and logged in redirect to home
            history.push("/");
        })
        .catch((e) => alert(e.message));
    }; 
    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
                    alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} type="password" onChange={event => setPassword(event.target.value)}/>
                    <button type="submit" onClick={login} className="login__signInButton">Sign In</button>
                </form>
                <p>
                    Terms and condition
                </p>
                <button onClick={register} className="login__registerButton">Create your amazon Account</button>
            </div>
        </div>
    )
}

export default Login;
