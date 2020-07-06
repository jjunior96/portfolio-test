import styled from 'styled-components';

export const PhotoWrapper = styled.li`
  -webkit-transition: all 0.3s !important;
  transition: all 0.3s !important;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  /* box-shadow: 0 0 30px rgba(0, 0, 0, 0.2); */
`;

export const PhotoList = styled.ul``;

export const PhotoItem = styled.article`
  width: 100%;

  img:hover {
    width: 100% !important;

    -webkit-transform: scale(1.1) !important;
    transform: scale(1.1) !important;
    -webkit-transition: 0.3s all !important;
    transition: 0.3s all !important;
  }
`;
