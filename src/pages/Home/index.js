import React, { useState } from 'react';

import logo from '../../assets/logo.svg';
import resturanteImg from '../../assets/restaurante-fake.png';

import { ImageCard } from '../../components/ImageCard';
import { RestauranteCard } from '../../components/RestauranteCard';

import {
  Wrapper,
  Container,
  Search,
  Logo,
  Input,
  Carousel,
  CarouselTitle,
  Map,
} from './styles';

export function Home() {
  const [search, setSearch] = useState('');

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do restaurante" />
          <Input
            placeholder="Pesquisar"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          {search}
          <CarouselTitle>
            Na sua área
          </CarouselTitle>

          <Carousel {...settings}>
            {
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(item =>
                <ImageCard photo={resturanteImg} title="Nome do resturante" key={String(item)} />
              )
            }
          </Carousel>
          <RestauranteCard />
        </Search>
      </Container>
      <Map />
    </Wrapper>
  );
}
