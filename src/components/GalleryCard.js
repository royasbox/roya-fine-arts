import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class GalleryCard extends React.Component {
  render() {
    const { imgPath, title, description, placeholderLink, demoLink, isBlog } = this.props;

    return (
      <Card className="gallery-card-view">
        <Card.Img variant="top" src={imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {description}
          </Card.Text>
          <Button className="purchasebtn" variant="primary" href={placeholderLink} target="_blank">
            Purchase
          </Button>
          {"\n"}
          {"\n"}

          {!isBlog && demoLink && (
            <Button
              variant="primary"
              href={demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              {"Demo"}
            </Button>
          )}
        </Card.Body>
      </Card>
    );
  }
}

export default GalleryCard;
