import styled from 'styled-components';

export const MenuLinksWrapper = styled.nav``;

export const MenuLinksList = styled.ul`
  font-size: 1.1rem;
  font-weight: 300;
  display: flex;
  justify-content: space-between;
`;

export const MenuLinksItem = styled.li`
  color: #fff;
  text-decoration: none;
  list-style-type: none;
  padding: 0.4rem;
  cursor: pointer;
  transition: color 0.4s;

  &:hover {
    color: #f2de77;
  }
`;
