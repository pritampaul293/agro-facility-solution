import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Slider.css';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <Container className='Carousel'>
      <Row>
       <Col sm={12} md={8}>
       <Carousel className='carouselCard'>
      <Carousel.Item className='riad'>
        <img style={{height: '400px'}}
          className="d-block w-100"
          src="https://akkbd.com/wp-content/uploads/2022/09/Egg.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='sliderHeading'>ডিম, মুরগি ও বাচ্চার আজকের (৫ অক্টোবর) বাজারদর</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: '400px'}}
          className="d-block w-100"
          src="https://akkbd.com/wp-content/uploads/2022/10/Untitled-3.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3 className='sliderHeading'>ডিম, মুরগি ও বাচ্চার আজকের (৫ অক্টোবর) বাজারদর</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: '400px'}}
          className="d-block w-100"
          src="https://akkbd.com/wp-content/uploads/2021/12/cow-fatt.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3 className='sliderHeading'>ডিম, মুরগি ও বাচ্চার আজকের (৫ অক্টোবর) বাজারদর</h3>
        </Carousel.Caption>
      </Carousel.Item>
    <Carousel.Item>
        <img style={{height: '400px'}}
          className="d-block w-100"
          src="https://akkbd.com/wp-content/uploads/2022/10/Untitled-1-5.jpg"
          alt="Fourth slide"
        />
        <Carousel.Caption>
        <h3 className='sliderHeading'>ডিম, মুরগি ও বাচ্চার আজকের (৫ অক্টোবর) বাজারদর</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       </Col>
       <Col sm={6} md={4} >
       <Card style={{ width: '22rem', height: '26rem',marginLeft:'3rem',marginRight:'2rem', borderRadius:'1rem',boxShadow:'1px 3px 6px' }}>
       <Link  to="/Ecom">
       <Card.Img  src="https://gbagrovetgroupbd.com/assets/backend/img/uploads/product/image/1698367027188894Untitled-3.jpg" alt="Card image" />
      <Card.ImgOverlay>
        
        
      
      </Card.ImgOverlay>
        <Card.Text className='textPicture'>মূল্যঃ ১১০ টাকা+কুরিয়ার চার্জসহ</Card.Text>
        <Card.Text className='textPicture2'>বিস্তারিতঃ০১৮৭৬৯৮০০২১ </Card.Text>
        </Link>
    </Card>
       </Col>
      </Row>
    </Container>
        
    );
};

export default Slider;