import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import logo from '../../assets/logo.svg';
import resturanteImg from '../../assets/restaurante-fake.png';

import { ImageCard, RestauranteCard, Modal, Map } from '../../components';

import { Wrapper, Container, Search, Logo, Form, Input, Carousel, CarouselTitle } from './styles';

export function Home() {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants } = useSelector((state) => state.restaurants);

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
            {restaurants.map((restaurant) => (
              <ImageCard
                photo={restaurant.photos ? { uri: restaurant.photos[0].getUrl() } : resturanteImg}
                title={restaurant.name}
                key={String(restaurant)}
              />
            ))}
          </Carousel>
          <button type="button" onClick={() => setModalOpened(!modalOpened)}>
            Abrir modal
          </button>
          {restaurants.map((restaurant) => (
            <RestauranteCard restaurant={restaurant} />
          ))}
        </Search>
      </Container>
      <Map query={query} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
  );
}
