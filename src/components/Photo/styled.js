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

  object-fit: cover;
  object-position: center center;
  opacity: 1;
  /* transition: none 0s ease 0s; */
  -webkit-transition: all 0.3s !important;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  /* width: 100%;
  border-radius: 2px;
  -webkit-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  -moz-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  -ms-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  -o-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1); */

  -webkit-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  -moz-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  -ms-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  -o-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);

  &:hover img {
    /* transform: translate(-50%, -50%); */
    /* padding: 6px 0px 6px 6px; 
    overflow: hidden; 

    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    transition: all 0.3s !important; */

    /* -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2); */

    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    transition: all 0.5s ease;
    -moz-transform: scale(1.5) rotate(-5deg);
    -webkit-transform: scale(1.5) rotate(-5deg);
    -o-transform: scale(1.5) rotate(-5deg);
    -ms-transform: scale(1.5) rotate(-5deg);
    transform: scale(1.5) rotate(-5deg);
  }
`;
