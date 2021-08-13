import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.aside`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 16px;
`;

export const Logo = styled.img`
  width: 150px;
  max-width: 100%;
  margin-inline: auto;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 5px;
  padding: 5px;
`;

export const Map = styled.div`
  background-color: red;
  width: 100%;
`;

export const Carousel = styled(Slider)`
  margin-right: 16px;
`;

export const CarouselTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0px;
`;
