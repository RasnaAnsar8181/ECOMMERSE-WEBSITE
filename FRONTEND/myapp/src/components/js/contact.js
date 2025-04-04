import React, { useState } from 'react'
import '../css/contact.css'
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faLocation,faPhone} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const navigate = useNavigate()

  async function saveData(e){
      try {
        e.preventDefault()
        await axios.post('http://localhost:8080/contact',{name:name,email:email,message:message});
        alert("Data is successfully submitted");
        navigate('/');
      } catch (error) {
        console.log(error)
      }
  }
  return (
  <>
  <div className='outerdiv'>
    <div className='leftdiv'>
      <div className='main'>
        <form id="contact-form" onSubmit={(e)=>saveData(e)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" name='email'  value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" name='message'  value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
          </div>
          <button type="submit" className="btncontact mt-5">SUBMIT</button>
        </form>
      </div>
      </div>
      <div className='rightdiv'>
        <div className='address' style={{marginTop: "150px"}}>
            <FontAwesomeIcon icon = {faLocation} />
            <p><b>Our Office Address</b></p>
            <p>Palm court building,5th floor,<br></br>New link road,Malad West ,Mumbai<br></br>Maharashtra<br></br>400064</p>
        </div>
        <div className='address'>
            <FontAwesomeIcon icon = {faEnvelope} />
            <p><b>Our Email-ID</b></p>
            <p>rasnaansar@gmail.com</p>
        </div>
        <div className='address'>
            <FontAwesomeIcon icon = {faPhone} />
            <p><b>Contact Number</b></p>
            <p>Mobile: 3456789656</p>
        </div>    
      </div>
     </div>   
  </>
  )
}

export default Contact