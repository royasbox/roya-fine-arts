import React from 'react'
import '../pages/style.css';
import GalleryCard from "./GalleryCard";
import { Container, Row, Col } from 'react-bootstrap'

const galleryItems = [
  {
    imgPath: require('../Assets/paintings/village.jpg'),
    isBlog: false,
    title: 'Wooden House',
    description: 'I felt a sense of nostalgia wash over me as I was painting this wooden house in a village located in the heart of the forest. This image of the house evokes memories of a simpler, more peaceful time. The intricate carvings and colorful flowers in the garden remindes of the artistry and craftsmanship that is becoming increasingly rare in our modern world.',
    placeholderLink: '#'
  },
  {
    imgPath: require('../Assets/paintings/ink_watercolor.jpeg'),
    isBlog: false,
    title: 'Medieval Castle',
    description: 'This painting portrays a beautiful castle in a breathtaking scene that captures the majesty and grandeur of medieval architecture and the natural beauty of the surrounding landscape. The castle stands tall and majestic, dominating the landscape around it.',
    placeholderLink: '#'
  },
  {
    imgPath: require('../Assets/paintings/ink.jpg'),
    isBlog: false,
    title: 'Ancient City',
    description: 'This ink painting portrays a set of building in a city in Iran. I was mesmerized by the beauty and character of the buildings and with every stroke, I aimed to capture the intricate details of the structure and convey the rich cultural history that it embodies. The play of light and shadows added a new dimension to the painting, highlighting the unique textures and shapes of the buildings.',
    placeholderLink: '#'
  },
  {
    imgPath: require('../Assets/paintings/oil_on_canvas.jpeg'),
    isBlog: false,
    title: 'Ocean Eye',
    description: 'This painting captures the eye of a woman, gazing out into the endless expanse of the ocean. Her gaze is fixed on something unseen, and her expression is one of both intrigue and wonder. The water stretches out endlessly before her, its deep blue depths seeming to hold secrets untold. The woman\'s eye serving as a window into the vastness of the natural world.',
    placeholderLink: '#'
  },
  {
    imgPath: require('../Assets/paintings/hotel.jpg'),
    isBlog: false,
    title: 'Impressive Sight',
    description: 'This painting is a celebration of the unique culture and natural beauty of Iran with its intricate architecture and vibrant colors, and a tribute to the artistry and craftsmanship of its people. It captures the harmony between the built environment and the natural world, highlighting the beauty of both.',
    placeholderLink: '#'
  },
  {
    imgPath: require('../Assets/paintings/garden.jpg'),
    isBlog: false,
    title: 'Calm Garden',
    description: 'This painting evokes a sense of calm and relaxation, and beckons the viewer to escape the hustle and bustle of everyday life and immerse themselves in the beauty of nature. It captures the serene beauty of the garden, with its lush greenery and vibrant blooms that invite you to sit and enjoy the peaceful surroundings.',
    placeholderLink: '#'
  },
];

function Gallerylist() {
  return (
    <div className="gallerybackground">
      <Container fluid className="gallery-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {galleryItems.map((item, index) => (
              <Col md={4} className="gallery-card" key={index}>
                <GalleryCard {...item} />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </div>
  )
}

export default Gallerylist;
