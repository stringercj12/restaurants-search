import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 5px;
  padding: 16px;
  border-left: 5px solid transparent;

  :hover {
    background-color: ${({ theme }) => theme.colors.background};
    border-left-color:  ${({ theme }) => theme.colors.primary};
  }
`;
