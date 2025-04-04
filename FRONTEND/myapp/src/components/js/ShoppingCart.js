import React, { useState, useEffect } from 'react'
import '../css/ShoppingCart.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function ShoppingCart() {

    const [items, setItems] = useState([])
    const navigate = useNavigate()

   
    useEffect(() => {
        async function getData() {
            try {
                const res = await axios.get('http://localhost:8080/cart')
                setItems(res.data)
            } catch (error) {
                console.log(error)
            }  
        }
        getData()
    }, []);

    // async function deleteCart(idno){
    //     try {
    //         await axios.delete(`http://localhost:8080/cart/${idno}`)
    //         alert("This product is deleted from the cart")
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    return (
        <>
        <div className='cartmain'>
            <div className='cartcontainer'>
                <h2><u>ShoppingCart</u></h2>
            </div>
            <hr className='hrcart' />
                <div>
                    <table className='tablecart'>
                        <tr className='trcart'>
                            <th className='tbcartimg'>ITEM</th>
                            <th colSpan={3} className='cartdesc'>DETAILS</th>
                            <th className='cartid'>ID NO</th>
                            <th className='cartqty'>QTY</th>
                            <th className='cartprice'>PRICE/QTY</th>
                            <th className='totalprice'>TOTAL PRICE</th>
                            <th>ACTION</th>
                        </tr>
                        {items.map((item) => (
                        <tr className='trcart'>
                            <td className='tbcartimg'><img className='cartimg' src={require(`../images/${item.group}img/${item.image}.webp`)} alt='ItemImage'></img></td>
                            <td colSpan={3} className='cartdesc'> {item.item}</td>
                            <td className='cartqty'>{item.idno}</td>
                            <td className='cartqty'>{item.qty}</td>
                            <td>{item.price}</td>
                            <td>{item.price * item.qty} </td>
                            <td> 
                                <button className='btncart' onClick={() => navigate('/Payment')}>Buy Now</button>
                                <button className='btncart' onClick={() => navigate('/DeleteCart',{state:{value:item.idno}})}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </table>
                    <hr className='hrcart' />
                </div>
                </div>          
        </>
    )
}

export default ShoppingCart