import styled from 'styled-components';
import Slider from 'react-slick';
import { FiSearch } from 'react-icons/fi';

import { Text } from '../../components';

export const Form = styled.form`
  padding: 13px;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 5px;
  padding: 5px;
`;

export const ButtonIcon = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  position: absolute;
  top: 22px;
  right: 5px;
  cursor: pointer;
`;

export const Icon = styled(FiSearch)`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Container = styled.aside`
  background-color: ${({ theme: { colors } }) => colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: scroll;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  padding: 16px;
`;

export const Logo = styled.img`
  margin: 15px;
`;

export const Title = styled(Text)`
  margin: 16px 0;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;
