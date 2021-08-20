import React from 'react';
import ReactStars from 'react-rating-stars-component';

import restauranteImg from '../../assets/restaurante-fake.png';

import {
  Restaurant,
  RestaurantInfo,
  RestaurantTitle,
  RestaurantAvaliation,
  RestaurantAddress,
  RestaurantImage,
} from './styles';

const RestauranteCard = () => {
  return (
    <Restaurant>
      <RestaurantInfo>
        <RestaurantTitle>Nome do restaurante</RestaurantTitle>
        <RestaurantAvaliation>
          <ReactStars count={5} value={4} isHalf edit={false} size={24} activeColor="#e7711c" />,
        </RestaurantAvaliation>
        <RestaurantAddress>Rua Rio de Janeiro 120</RestaurantAddress>
      </RestaurantInfo>

      <RestaurantImage src={restauranteImg} alt="Foto do restaurante" />
    </Restaurant>
  );
};

export default RestauranteCard;
