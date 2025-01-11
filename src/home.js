import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import picarr from './picarr';
import './home.css';
 

function Home() {
 
  return (
    <>
      <Carousel className='Carous '>
        {picarr.map((item)=>(
          <Carousel.Item>
            <img
              className="d-block image"
              src={item}
              alt="slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>

  );
}

export default Home;