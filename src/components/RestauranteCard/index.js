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

const RestauranteCard = ({ restaurant }) => {
  return (
    <Restaurant>
      <RestaurantInfo>
        <RestaurantTitle>{restaurant.name}</RestaurantTitle>
        <RestaurantAvaliation>
          <ReactStars
            count={5}
            value={restaurant.rating}
            isHalf
            edit={false}
            size={24}
            activeColor="#e7711c"
          />
          ,
        </RestaurantAvaliation>
        <RestaurantAddress>{restaurant.vicinity || restaurant.formatted_address}</RestaurantAddress>
      </RestaurantInfo>

      <RestaurantImage
        src={restaurant.photos ? { uri: restaurant.photos[0].getUrl() } : restauranteImg}
        alt="Foto do restaurante"
      />
    </Restaurant>
  );
};

export default RestauranteCard;
