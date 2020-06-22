import React from 'react';

import Sidebar from '../Sidebar';
import Footer from '../Footer';
import GlobalStyles from '../../styles/global';

import * as S from './styled';

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      {children}
      <Footer />
    </S.LayoutWrapper>
  );
};

export default Layout;
