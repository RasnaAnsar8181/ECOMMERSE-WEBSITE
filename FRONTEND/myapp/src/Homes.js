import { Carousel } from 'react-bootstrap'
import picarr from './picarr';

function Homes() {
  const image = {
    width: "80%",
    height: "480px",
    marginTop: "120px",
    marginLeft: "130px",
    borderRadius: "5px"
  }

  return (
    <>
      <Carousel>
        {picarr.map((item) => (
          <Carousel.Item>
            <img
              style={image}
              className="d-block"
              src={item}
              alt="slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>

  );
}

export default Homes;