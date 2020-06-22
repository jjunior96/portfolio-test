import { Link } from 'gatsby';
import styled from 'styled-components';

export const SidebarWrapper = styled.section`
  display: flex;
  width: 24rem;
  height: 100vh;
  flex-direction: column;
  background: #0d0d0d;
  align-items: center;
  padding: 2rem;
  position: fixed;
`;

export const SidebarLogo = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: 800;
  font-size: 2rem;
  transition: color 0.4s;

  &:hover {
    color: #f2de77;
  }
`;
