import { Carousel } from "react-bootstrap"
import SliderImg2 from "./banner-services-01.png"
import "./SliderComponent.css"

function SliderComponent() {
    return (
        <Carousel className="carousel-dt ">
        <Carousel.Item interval={2000}>
        <img className="w-100" src={SliderImg2} text="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
        <img className="w-100" src={SliderImg2} text="Second slide" />
        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000} >
        <img className="w-100" src={SliderImg2} text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}

export default SliderComponent