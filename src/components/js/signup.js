import React, { useEffect, useRef, useState } from 'react'
import '../css/sign-log.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faUser,faLock} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


function SignUp() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const inputRef = useRef()
    const navigate = useNavigate()

    useEffect(()=>{
        inputRef.current.focus()
    },[])
      
    async function saveData(){   
        try {
          await axios.post('http://localhost:8080/reg/signup',{name:name, email:email, password:password}); 
          alert('You are successfully registered')
          navigate('/products')
          } catch (error) {
            console.log(error)
        }
    }
    
   return (
    <div className="mainbody">
        <div className="maincontainer">
            <div className="header">
                <div className='head'><u>Sign Up</u></div>
                <h6><b>Please fill in the form to create an account</b></h6>
            </div>            
            <div className="content">
               <form onSubmit={saveData}> 
                <div className="name">
                    <div className="icon"><FontAwesomeIcon icon = {faUser} /></div>
                    <div className="input1"><input 
                        ref={inputRef}
                         name='name'
                         value={name}  
                         maxLength={16}
                         onChange={(e)=>setName(e.target.value)} 
                         type="text" 
                         required
                         placeholder='Username'/>
                    </div>
                </div>
               
                
                <div className="email">
                    <div className="icon"><FontAwesomeIcon icon = {faEnvelope} /></div>
                    <div className="input1"><input 
                        name='email'
                        value={email} 
                        onChange={(e)=>setEmail(e.target.value)} 
                        type="email" 
                        required
                        placeholder='Email-id'/>
                    </div>
                </div>
              
                <div className="password">
                    <div className="icon"><FontAwesomeIcon icon = {faLock} /></div>
                    <div className="input1"><input 
                        name='password'
                        value={password} 
                        onChange={(e)=>setPassword(e.target.value)} 
                        type="password" 
                        required
                        placeholder='Password'/>
                    </div>  
                </div>      
                <h6><b>By creating an account you agree to our terms and conditions</b></h6>         
                <div className='footer'>
                    
                    <button className='btnfooter' type='submit'>SIGN UP</button>
                </div>  
                </form>
            </div>                        
        </div>
    </div>
  )
}
export default SignUp