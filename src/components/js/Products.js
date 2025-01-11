import { useNavigate } from 'react-router-dom';
import proArr from './proArr';
import '../css/Products.css'
import { Button,Card,Container } from 'react-bootstrap';

function Products() { 
    const navigate = useNavigate()
    return (
        <>     
            <Container fluid style={{marginTop:"150px"}}>
                <h4 className='product_h4'>Shop by the category given below</h4>
                <hr className='hrpro'></hr>    
                <br/>       
                {proArr.map((item) => (
                <div className='d-inline-flex justify-content-center align-items-center'> 
                    <Card role='button' onClick={() => navigate('/EachCategory',{state:{value:item.data}})} className="shadow p-3 m-2 bg-body-tertiary rounded d-inline-flex text-center" style={{ width: '13rem'}} key={item.data}>
                        <Card.Img style={{height:'15rem',width:'150px'}} className='m-auto' variant="top" src={item.proImg} />
                        <Card.Body>
                            <Button  id='product-b' style={{height: '60px',width:"150px"}} onClick={() => navigate('/EachCategory',{state:{value:item.data}})}>{item.proTitle}</Button>
                        </Card.Body>
                    </Card>
                </div>
                ))   
                }
            </Container>
        </>
    );
}

export default Products;