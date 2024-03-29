import React, { useState } from "react"
import Link from 'next/link';
import styled from 'styled-components';
import { Spacer } from "@nextui-org/react";
import { useRouter } from "next/router";
import { signIn } from 'next-auth/react'

const Login = () => {
    const  [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const router = useRouter();

    const handleSubmit = (e) =>{
        e.preventDefault(e);
       console.log(user);
       console.log(pass);
       signIn();
       
       if (!user) {
        window.alert('Please provide username')
       }
       else if (!pass) {
        window.alert('Please provide password')
       } else {
        window.alert('Welcome' + ' ' + {user})
        router.push('../user-pages/profile')
       } 

    }

   

        return (
            <div className="authform">
            <div className="form">
                
           <form>
                <Spacer y={1} />
            <input name="userName"/>
            <label style={{color: "white", translate: -5}} form="userName">
                Username
                <input value={user} onChange={(e) => setUser(e.target.value)} type='username' placeholder='Username' id="Username" name='Username'/>
            </label>
           
            <Spacer y= {.25} />
                <br />
            <label style={{color: "White", translate: -5}} form="Password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)}type="Password" placeholder="******" id='Password' name='Password' />

            <button type='submit' 
            onClick={signIn}>Log In</button>
           </form>
           <Spacer y={.75} />
           <a style={{color: "white"}} href='#'>Forgot Password?</a>
                <Spacer y={.25} />
           <Link style={{color: "white"}} href='../user-pages/signup'> Dont have an account? Register here! </Link>
           </div>
           </div>
        );
    };
 
export default Login;
