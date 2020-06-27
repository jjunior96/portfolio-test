import React from 'react';

import Sidebar from '../Sidebar';
import Header from '../Header';
import Footer from '../Footer';
import GlobalStyles from '../../styles/global';

import * as S from './styled';

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <Header />
      {children}
      <Footer />
    </S.LayoutWrapper>
  );
};

export default Layout;
