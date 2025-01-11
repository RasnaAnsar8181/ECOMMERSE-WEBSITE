import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

function DeleteCart() {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(()=>{
        async function deleteData(){
            try {
                await axios.delete(`http://localhost:8080/cart/${location.state.value}`)
                alert("deleted")
            } catch (error) {
                console.log(error)
            }        
        }
        deleteData()
        navigate('/ShoppingCart')
    },[])
  return (
    <div>
      
    </div>
  )
}

export default DeleteCart
