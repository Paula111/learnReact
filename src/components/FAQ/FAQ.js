import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import { FAQContent } from '../../data/dataStore';


const FAQ = () => (
  <Container>
    <Hero titleText={FAQContent.title} image={FAQContent.image} />
    <p>{FAQContent.description}</p>
  </Container>
);

FAQ.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
  image: PropTypes.string,
};

export default FAQ;