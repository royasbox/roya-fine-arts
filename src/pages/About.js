import React from 'react';
import Header from '../components/Header';
import AboutPage from '../components/AboutPage';

const About = () => {
  const components = [Header, AboutPage];
  const componentList = components.map(Component => <Component />);
  return <div>{componentList}</div>;
};

export default About;
