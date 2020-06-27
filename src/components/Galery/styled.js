import styled from 'styled-components';

export const GaleryWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
  margin: 10rem;
  margin-top: 32px;
  margin-left: 34rem;

  /* padding: 32px;
  max-width: 1140px;
  margin: 0 auto;

  img {
    max-width: 100%;
  } */

  /* Portrait and Landscape */
  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
