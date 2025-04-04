import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import axios from 'axios';


function Navbar11() {

    const [totalno, setTotalNo] = useState()
    const navigate = useNavigate()
    console.log("navbar")
    useEffect(() => {
        async function getData() {
            try {
                const res = await axios.get('http://localhost:8080/cart')
                const items = res.data
                // let l = items.length
                const l = items.reduce((sum, item) => sum + 1, 0);
                setTotalNo(l)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [totalno])

    return (
        <>
            <Navbar expand="lg" className='main-nav'>
                <h1 className='brand'>AR SHOP</h1>
                <Navbar.Toggle aria-controls="navbarScroll" className='m-auto' />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto p-5">
                        <Nav.Link id='nav1' as={Link} to="/" exact>
                            Home
                        </Nav.Link>
                        <Nav.Link id='nav1' as={Link} to="/products">
                            Products
                        </Nav.Link>
                        <Nav.Link id='nav1' as={Link} to="/Contact">
                            Contact
                        </Nav.Link >
                        <Nav.Link id='nav1' as={Link} to="/SignUp">
                            SignUp
                        </Nav.Link>
                        <Nav.Link id='nav1' as={Link} to="/Login">
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

export default Navbar11