
import React from 'react'
import { Button, Form, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Payment.css'

function Payment() {
    return (
        <>
        <div className='mainpay'>
            <Container>
                <h3>Select the Payment Method</h3>
                <hr className='hrpay'></hr>              
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Google Pay</Form.Label>
                        <Form.Control type="text" placeholder="Enter UI number" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Phone Pay</Form.Label>
                        <Form.Control type="text" placeholder="Enter UI number" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Paytm</Form.Label>
                        <Form.Control type="text" placeholder="Enter UI number" />
                    </Form.Group>
                    <Button style={{backgroundColor:'rgb(2, 90, 104)',width:'200px'}}>BUY</Button>
                </Form>
            </Container>
            </div>  
        </>
    )
}

export default Payment