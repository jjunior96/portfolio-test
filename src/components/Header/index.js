import React from 'react';

import HeaderTitle from '../HeaderTitle';
import Navigation from '../Navigation';

import * as S from './styled';

const Header = () => (
  <S.HeaderWrapper>
    <S.HeaderContainer>
      <S.HeaderMain>
        <S.HeaderLogo>
          <HeaderTitle />
        </S.HeaderLogo>
        <S.HeaderMenu>
          <Navigation />
        </S.HeaderMenu>
      </S.HeaderMain>
    </S.HeaderContainer>
  </S.HeaderWrapper>
);

export default Header;
