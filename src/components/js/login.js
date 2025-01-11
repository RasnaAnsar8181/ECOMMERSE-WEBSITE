import { React, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/sign-log.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const inputRef = useRef()

    useEffect(()=>{
        inputRef.current.focus()
    },[])
   
    async function checkData() {    
        try {
            const result = await axios.get('http://localhost:8080/reg/login', {params : {email: email,password: password}});
        if (result.data === 'login'){
            alert('You are successfully logged in')
            navigate('/')
        }    
        else{
            alert('Incorrect email or password')
            navigate('/SignUp')
        }
        } catch (error) {
           console.log(error)
        }
    }
    return (
        <div className="mainbody">
        <div className="maincontainer">
            <div className="header">
                <div className='head'><u>Login</u></div>
                <h6><b>Enter your email_ID and password</b></h6>
            </div> 
            <div className="content">
              <form onSubmit={checkData}> 
                 <div className="email">
                    <div className="icon"><FontAwesomeIcon icon = {faEnvelope} /></div>
                    <div className="input1"><input 
                        ref={inputRef}
                        name='email'
                        value={email} 
                        onChange={(e)=>setEmail(e.target.value)} 
                        type='text'
                        placeholder='Email-id'/>
                    </div>
                </div>
                <div className="password">
                    <div className="icon"><FontAwesomeIcon icon = {faLock} /></div>
                    <div className="input1"><input 
                        name='password'
                        value={password} 
                        onChange={(e)=>setPassword(e.target.value)} 
                        type="text" 
                        placeholder='Password'/>
                    </div>  
                </div>         
                <div className='footer'><button className='btnfooter' type='submit'>LOGIN</button></div>
                </form>
            </div>                        
        </div>
    </div>
    )
}

export default Login