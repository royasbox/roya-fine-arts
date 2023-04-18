import React from 'react';
import ContactPage from '../components/ContactPage';
import Header from '../components/Header';

class Contact extends React.Component {
  render() {
    const components = [Header, ContactPage];
    return (
      <div>
        {components.map((Component, index) => (
          <Component key={index} />
        ))}
      </div>
    );
  }
}

export default Contact;
