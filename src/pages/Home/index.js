import React, { useState } from 'react';

import logo from '../../assets/logo.svg';
import resturanteImg from '../../assets/restaurante-fake.png';

import { ImageCard, RestauranteCard, Modal, Map } from '../../components';

import { Wrapper, Container, Search, Logo, Form, Input, Carousel, CarouselTitle } from './styles';

export function Home() {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    arrows: false,
  };

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(search);
    }
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do restaurante" />
          <Form>
            <Input
              placeholder="Pesquisar"
              value={search}
              onKeyPress={handleKeyPress}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form>
          {search}
          <CarouselTitle>Na sua área</CarouselTitle>

          <Carousel {...settings}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
              <ImageCard photo={resturanteImg} title="Nome do resturante" key={String(item)} />
            ))}
          </Carousel>
          <button type="button" onClick={() => setModalOpened(!modalOpened)}>
            Abrir modal
          </button>
          <RestauranteCard />
        </Search>
      </Container>
      <Map query={query} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
  );
}
