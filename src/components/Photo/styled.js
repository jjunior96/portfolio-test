import styled from 'styled-components';

export const PhotoWrapper = styled.article`
  display: grid;
  /* border: 1px solid green; */
  color: green;
  width: 100%;
  height: 280px;
  border-radius: 10px;
  overflow: hidden;
  line-height: 1.5;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  /* position: absolute; */
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 11;

  /* 
  position: relative;
  overflow: hidden;
  display: inline-block; */

  &:hover img {
    transform: scale(1.1);
    width: 100% !important;
    -webkit-transition: 0.3s all !important;
    transition: 0.3s all !important;
  }

  &:after {
    /* transform: scale(1);
    
    /* top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%; */
    background: #3333339c;
  }
`;
