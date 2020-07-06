import styled from 'styled-components';

export const NavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
  font-weight: 300;
  padding: 0 9rem;

  @media only screen and (max-width: 820px) {
    display: none;
  }
`;
