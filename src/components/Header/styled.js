import { Link } from 'gatsby';
import styled from 'styled-components';

export const HeaderWrapper = styled.section`
  display: flex;
  width: 100%;
  height: 80px;
  background: #0d0d0d;
  align-items: center;
  padding: 0 250px;
  justify-content: space-between;
`;

export const HeaderLogo = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: 800;
  font-size: 2rem;
  transition: color 0.4s;

  &:hover {
    color: #f2de77;
  }
`;
