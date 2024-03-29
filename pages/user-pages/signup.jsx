import React, {useState} from 'react';
import Link from 'next/link';
import { Spacer } from '@nextui-org/react';
import { useRouter } from 'next/router';



const Signup = () => {
    
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const router = useRouter();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(name);
        console.log(pass);

        if (!name) {
            throw Error('Please provide a username')
        }
        else if (!email) {
            window.alert('Please provide email address')
        }
        else if (pass.length <= 8 ) {

            window.alert('Please make password longer than 8 characters')

        } else {
           
            window.alert(`Welcome ${name}! `)
            router.push('../user-pages/login')
    }
}
    return (
       <div className='authform'>
           <form onSubmit={handleSubmit}>
           <label form='Username' style={{color: "white", translate: -5}}>Username</label>
            <input value={name} onChange={(e) => setName(e.target.value)} name='Username' placeholder='Username'/>
            <Spacer y={.75} />
            <label form="Email"  style={{color: "white", translate: -5}}>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type='Email' placeholder='youremail@gmail.com' id="Email" name='Email' style={{translate: 15}}/>
            <Spacer y={1}/>
            <label form="Password" style={{color: "white", translate: -5}}>Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)}type="Password" placeholder="******" id='Password' name='Password'/>
            <Spacer y={.50} />
            
            <button onSubmit={handleSubmit}>Register</button>
            
           </form>
            <Link href='../user-pages/login' style={{color: "white"}}> Already have an account? Log in here! </Link>
        </div>  
        )

}

 
export default Signup;