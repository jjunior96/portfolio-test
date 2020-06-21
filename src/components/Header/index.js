import React from 'react';

import MenuLinks from '../MenuLinks';

import * as S from './styled';

const Header = () => (
  <S.HeaderWrapper>
    <S.HeaderLogo to="/">Header</S.HeaderLogo>
    <MenuLinks />
  </S.HeaderWrapper>
);

export default Header;
