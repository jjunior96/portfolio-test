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

      {/* <S.LayoutSidebar> */}
      <Sidebar />
      {/* </S.LayoutSidebar> */}

      {/* <S.LayoutHeader> */}
      <Header />
      {/* </S.LayoutHeader> */}

      {children}

      {/* <S.LayoutFooter className="footer1"> */}
      <Footer />
      {/* </S.LayoutFooter> */}
    </S.LayoutWrapper>
  );
};

export default Layout;
