import React, { useState } from 'react';
import '../pages/style.css';
import { Container, Form, Button } from 'react-bootstrap';

const ContactPage = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting email: ${email}`);
  }

  return (
    <div className="contactbackground">
      <Container>
        <div className="contactinfo">
          <h2 className="contacthead">Get in touch!</h2>
          <p className="contactpara">
            I am always here to help. If you have any questions or just want to chat, feel free to contact me anytime.
          </p>
          <button className="contactbtn" onClick={() => window.location.href = 'mailto:royafazeli9@gmail.com'}>Email Me</button>
        </div>
        <hr className="contactline" />
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label className="contactcopy">Sign up for our newsletter:</Form.Label>
            <Form.Control type="email" placeholder="Enter your email address" value={email} onChange={handleEmailChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p className="contactcopy">
          &copy; {new Date().getFullYear()} Created by <span>Roya Fazeli</span>
        </p>
      </Container>
    </div>
  );
};

export default ContactPage;
