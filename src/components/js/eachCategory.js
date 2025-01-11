import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Container, Button, Card } from 'react-bootstrap'

function EachCategory() {
    const [items, setItems] = useState([]);
    const location = useLocation()
    const value = location.state.value
    const bg = { backgroundColor: "rgb(2, 90, 104)" }
    console.log(value)

    useEffect(() => {
        async function getData() {
            try {
                const res = await axios.get(`http://localhost:8080/${value}`)
                setItems(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [value]);

    async function toCart(item) {
        try {
            if (item.qty !== 0) {
                await axios.post('http://localhost:8080/cart', { idno: item.idno, group: value, item: item.item, desc: item.desc, price: item.price, image: item.image, qty: item.qty, total: item.price * item.qty });
                alert("Item saved to cart")
                
            }
        } catch (error) {
            console.log(error)
        }
    }
    function decQty(id) {
        const newitem = items.map((item) =>
            item.idno === id ? { ...item, qty: item.qty - 1 } : item
        );
        setItems(newitem);

    };
    function incQty(id) {
        const newitem = items.map((item) =>
            item.idno === id ? { ...item, qty: item.qty + 1 } : item
        );
        setItems(newitem);

    };
    return (
        <>
            <Container fluid style={{ marginTop: "110px" }}>
                {items.map((it) => (
                    <div className='d-inline-flex justify-content-center align-items-center'>
                        <Card className="shadow p-3 m-4 bg-body-tertiary rounded d-inline-flex text-center" style={{ width: '13rem' }} key={it.idno}>
                            <Card.Img style={{ height: '10rem' }} className=' w-75 m-auto' variant="top" src={require(`../images/${value}img/${it.image}.webp`)} />
                            <br />
                            <Card.Body>
                                <h6><b>{it.item}</b></h6>
                                <h5 style={{ color: "red" }}>Price : ₹{it.price}</h5>
                                <br />
                                <p><Button style={bg} className='m-2' onClick={() => incQty(it.idno)}>+</Button><span>{it.qty}</span><Button style={bg} className='m-2' onClick={() => decQty(it.idno)}>-</Button></p>
                                <Button style={bg} onClick={() => toCart(it)}>Add to Cart</Button>
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


