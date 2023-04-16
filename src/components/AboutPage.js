import React from 'react'
import '../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'

function AboutPage() {
  const artisticSkills = [
    'Oil Painting',
    'Acrylic Painting',
    'Watercolor Painting',
    'Sketching',
    'Mixed Media',
    'Charcoal Drawing',
    'Portraiture',
    'Abstract Art'
  ];

  return (
    <div className='aboutpagebackground'>
      <Container>
        <Row className='textbackground'>
          <Col md={7}>
            <h3 className='aboutmetext'>About <span>Me</span></h3>
            <p className='aboutdetails'>I'm an artist and painter based in Toronto, Canada. I create unique and captivating works of art that showcase my love for colors and textures. I am passionate about learning new techniques and exploring various mediums to create meaningful pieces that connect with people's emotions. My paintings aim to convey a message and tell a story that reflects my vision and personal experiences. </p>
            <div className='artskills'>
              <h3>"paintings bring life and beauty to your world!"</h3>
              <ul>
                {artisticSkills.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </Col>
          <Col md={5}>
            <div className='artimage'></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutPage;
