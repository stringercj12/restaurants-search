import styled from 'styled-components';

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 5px;
  border-left: 5px solid transparent;
  padding: 13px;

  :hover {
    background-color: ${({ theme }) => theme.colors.background};
    border-left-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RestaurantTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const RestaurantAvaliation = styled.p``;

export const RestaurantAddress = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  margin-bottom: 10px;
`;

export const RestaurantImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 6px;
  object-fit: cover;
`;
