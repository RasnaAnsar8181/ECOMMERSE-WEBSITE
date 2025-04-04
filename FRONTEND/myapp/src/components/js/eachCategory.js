import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, Button, Card } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';



function EachCategory() {
    const location = useLocation()
    const [items, setItems] = useState([])
    
    const [id,setId ] = useState(0)
    const bg = { backgroundColor: "rgb(2, 90, 104)" }
    
    useEffect(() => {
        async function getData() {
            try {
                const res = await axios.get(`http://localhost:8080/${location.state.info}`)
                setItems(res.data)
                const val = await axios.get('http://localhost:8080/cart')
                debugger
                console.log("len "+ val.data.length)
                setId(val.data.length + 1)
                // console.log("effect-len " + carts.length)
                // const id = carts.length + 1
                // console.log("effect-id "+id)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [location.state.info]);

    async function toCart(cartitem) {
        try {
            if (cartitem.qty !== 0) {
                // const val = await axios.get('http://localhost:8080/cart')
                // // console.log("cart "+ val.data)
                // setCarts(val.data)
                // console.log(val.data)
                // const len = carts.length
                // console.log("len " + len)
                // // debugger
                // setId(len + 1)
                setId(id + 1)
                console.log("id "+ id)
                // debugger
                alert("id=" + id)
                axios.post('http://localhost:8080/cart', { idno: id, group: location.state.info, item: cartitem.item, desc: cartitem.desc, price: cartitem.price, image: cartitem.image, qty: cartitem.qty, total: cartitem.price * cartitem.qty });
                cartitem.qty = 0
                alert("Item is added to cart");
    
            }
        } catch (error) {
            console.log(error)
        }
    }
    function decQty(id) {
        const newitem = items.map((item) => item.idno === id ? { ...item, qty: item.qty - 1 } : item);
        setItems(newitem);
    };
    function incQty(id) {
        const newitem = items.map((item) => item.idno === id ? { ...item, qty: item.qty + 1 } : item);
        setItems(newitem);

    };
    return (
        <>
            <Container fluid style={{ marginTop: "120px" }}>
                {items.map((item) => (
                    <div className='d-inline-flex justify-content-center align-items-center'>
                        <Card className="shadow p-3 m-4 bg-body-tertiary rounded d-inline-flex text-center" style={{ width: '13rem' }} key={item.idno}>
                            <Card.Img style={{ height: '10rem' }} className=' w-75 m-auto' variant="top" src={require(`../images/${location.state.info}img/${item.image}.webp`)} />
                            <br />
                            <Card.Body>
                                <h6><b>{item.item}</b></h6>
                                <h5 style={{ color: "red" }}>Price : ₹{item.price}</h5>
                                <br />
                                <p><Button style={bg} className='m-2' onClick={() => incQty(item.idno)}>+</Button><div className='d-inline' id='cart-qty'>{item.qty}</div><Button style={bg} className='m-2' onClick={() => decQty(item.idno)}>-</Button></p>
                                <Button style={bg} onClick={() => toCart(item)}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))
                }
            </Container>
        </>
    )

}

export default EachCategory



