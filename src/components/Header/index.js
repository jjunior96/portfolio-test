import React from 'react';

import HeaderTitle from '../HeaderTitle';
import Navigation from '../Navigation';

import * as S from './styled';

const Header = () => (
  <S.HeaderWrapper>
    <HeaderTitle />
    <Navigation />
  </S.HeaderWrapper>
);

export default Header;
