import React from 'react';

import { Container, Title } from './styles';

const ImageCard = ({ photo, title }) => {
  return (
    <Container photo={photo}>
      <Title>{title}</Title>
    </Container>
  );
};
export default ImageCard;
