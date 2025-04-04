import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

function DeleteCart() {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location.state.value)
    useEffect(()=>{
        async function deleteData(){
            try {
                await axios.delete(`http://localhost:8080/cart/${location.state.value}`)
                alert('Are you sure you want to delete the item?')
                navigate('/ShoppingCart')
            } catch (error) {
                console.log(error)
            }        
        }
        deleteData()   
    },[])

  return (
    <div>
      
    </div>
  )
}

export default DeleteCart
