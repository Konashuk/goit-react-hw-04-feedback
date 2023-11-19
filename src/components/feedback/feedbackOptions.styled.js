import styled from 'styled-components';

export const ContainerButton = styled.div`
  display: flex;
  gap: 12px;
`;

export const Button = styled.button`
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: blue;
    color: white;
  }
`;
