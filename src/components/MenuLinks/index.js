import React from 'react';

import * as S from './styled';

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      <S.MenuLinksItem>
        <S.MenuLinkLink to="/">Home</S.MenuLinkLink>
      </S.MenuLinksItem>
      <S.MenuLinksItem>
        <S.MenuLinkLink to="/categories">Categories</S.MenuLinkLink>
      </S.MenuLinksItem>
      <S.MenuLinksItem>
        <S.MenuLinkLink to="/About">About</S.MenuLinkLink>
      </S.MenuLinksItem>
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
);

export default MenuLinks;
