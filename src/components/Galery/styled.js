import styled from 'styled-components';

export const GaleryWrapper = styled.ul`
  /* display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 -5px;*/

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  margin: 0 10rem;

  /* Header + 32px */
  /* margin-top: 96px; */

  /* margin-left: 34rem; */
  list-style: none;

  img {
    max-width: 100%;
  }

  /* Portrait and Landscape */
  @media only screen and (max-width: 1456px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;
