import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UnstyledLink = styled(Link)`
  text-decoration: none;
  display: inline-flex;
`;

export const StyledLink = styled(UnstyledLink)`
  font-family: 'Nitty-Medium';
  border-radius: 2px;

  background-color: ${({ theme }) => theme.primary.darkGray};
  color: ${({ theme }) => theme.primary.lightGray};
  font-size: ${({ size }) => size || '15px'};
  height: 40px;
  line-height: 18px;
  font-weight: 500;
  min-width: ${({ width }) => width || '97px'};
  align-items: center;
  justify-content: center;
  transition: 250ms ease-in-out;

  /* Link states */
  &:hover {
    background-color: ${({ theme }) => theme.primary.lightGray};
    color: ${({ theme }) => theme.primary.darkGray};
    border: 1px solid ${({ theme }) => theme.primary.darkGray};
  }

  &:active {
    background-color: ${({ theme }) => theme.primary.darkGray};
    color: ${({ theme }) => theme.primary.gray};
    border: 1px solid ${({ theme }) => theme.primary.darkGray};
  }
`;
