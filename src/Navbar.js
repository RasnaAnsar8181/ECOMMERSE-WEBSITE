import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import axios from 'axios';

function Navbar1() {
    const [items, setItems] = useState()
    const [totalno, setTotalno] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        async function getData() {
            try {
                const res = await axios.get('http://localhost:8080/cart')
                setItems(res.data)
                let result = items.reduce(function (acc, item) { return acc + item.qty; }, 0)
                setTotalno(result)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [items, totalno])

    return (
        <>
            <Navbar expand="lg" className='main-nav'>
                <h1 className='brand logo'>AR SHOP</h1>
                <Navbar.Toggle aria-controls="navbarScroll" className='m-auto main-link' />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto p-5">
                        <Nav.Link className='nav1' as={Link} to="/" exact>
                            Home
                        </Nav.Link>
                        <Nav.Link className='nav1' as={Link} to="/products">
                            Products
                        </Nav.Link>
                        <Nav.Link className='nav1' as={Link} to="/Contact">
                            Contact
                        </Nav.Link >
                        <Nav.Link className='nav1' as={Link} to="/SignUp">
                            SignUp
                        </Nav.Link>
                        <Nav.Link className='nav1 ' as={Link} to="/Login">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav.Link className='cart-img mt-4 me-4' onClick={() => navigate('/ShoppingCart')}>
                    <div className='cartno' >{totalno}</div>
                    <FontAwesomeIcon icon={faShoppingCart} size='2xl' />
                </Nav.Link>
            </Navbar>
        </>
    )
}

export default Navbar1