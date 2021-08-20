import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 3px;
  background-image: url(${({ photo }) => photo});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5px;
`;

export const Title = styled.span`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;
  font-size: 12px;
  margin: 10px;
`;
