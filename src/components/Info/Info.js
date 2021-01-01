import React from 'react';
import { InfoContent } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';

const Info = () => (
  <Container>
    <Hero titleText={InfoContent.title} image={InfoContent.image} />
    <p>{InfoContent.description}</p>
  </Container>
);

Info.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
  image: PropTypes.string,
};

export default Info;