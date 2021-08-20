import React, { useState } from 'react';

import logo from '../../assets/logo.svg';
import resturanteImg from '../../assets/restaurante-fake.png';

import { ImageCard, RestauranteCard, Modal } from '../../components';

import {
  Wrapper,
  Container,
  Search,
  Logo,
  Form,
  Input,
  Carousel,
  CarouselTitle,
  Map,
} from './styles';

export function Home() {
  const [search, setSearch] = useState('');
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

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do restaurante" />
          <Form>
            <Input
              placeholder="Pesquisar"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
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
      <Map />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
  );
}
