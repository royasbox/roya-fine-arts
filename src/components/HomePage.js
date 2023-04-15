import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import Text from './Text';

import '../pages/style.css';

const socialMediaAccounts = [
  { name: 'Github', url: 'https://github.com/royasbox', icon: <AiFillGithub className='icon' /> },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/', icon: <FaLinkedinIn className='icon' /> },
  { name: 'Twitter', url: 'https://twitter.com/', icon: <AiOutlineTwitter className='icon' /> },
  { name: 'Instagram', url: 'https://instagram.com/', icon: <AiFillInstagram className='icon' /> },
];

function SocialMediaButton({ account }) {
  function handleClick() {
    window.open(account.url);
  }

  return (
    <button className='socailmediabtn' onClick={handleClick}>
      {account.icon}
    </button>
  );
}

function HomePage() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hello!</h2>
            <h2 className='nametext'>I'm Roya Fazeli</h2>
            <span></span>
            <Text />
          </Col>

          <Col md={5}>
            <div className='imagepainter'></div>
          </Col>
        </Row>
      </Container>

      <footer className='socialmediafooter'>
        {socialMediaAccounts.map((account) => (
          <SocialMediaButton key={account.name} account={account} />
        ))}
      </footer>
    </div>
  );
}

export default HomePage;
