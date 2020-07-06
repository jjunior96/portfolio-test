import styled from 'styled-components';

export const LayoutWrapper = styled.section`
  /* display: inline-grid;
  grid-template-areas:
    'sidebar' 'header' 'header'
    'sidebar' 'galery' 'galery'
    'sidebar' 'footer' 'footer'; */

  /* grid-template-columns: auto auto auto; */
  /* grid-template-rows: auto 100vh auto; */
  /* grid-template-columns: 1fr 3fr; */

  /* padding: 32px; */
  /* max-width: 1140px; */
  /* margin: 0 auto; */

  min-height: calc(100vh - 121px);
  max-width: 1800px;
  margin: 0 auto;

  img {
    max-width: 100%;
  }
`;

export const LayoutHeader = styled.header`
  /* display: grid; */
  grid-area: header;
`;

export const LayoutSidebar = styled.aside`
  /* display: grid; */
  grid-area: sidebar;
`;

export const LayoutGalery = styled.main`
  /* display: grid; */
  grid-area: galery;
`;

export const LayoutFooter = styled.footer`
  /* display: grid; */
  /* grid-area: footer; */
`;
