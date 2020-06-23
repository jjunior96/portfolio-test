import styled from 'styled-components';
import { Link } from 'gatsby';

export const MenuLinksWrapper = styled.nav``;

export const MenuLinksList = styled.ul`
  font-size: 1.1rem;
  font-weight: 300;
`;

export const MenuLinksItem = styled.li`
  list-style-type: none;
  padding: 0.4rem;
  cursor: pointer;
`;

export const MenuLinkLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  transition: color 0.4s;

  &:hover {
    color: #f2de77;
  }
`;
