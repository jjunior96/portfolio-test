import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import GlobalStyles from '../../styles/global';

import * as S from './styled';

const Layout = () => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Header />
      <Footer />
    </S.LayoutWrapper>
  );
};

export default Layout;
