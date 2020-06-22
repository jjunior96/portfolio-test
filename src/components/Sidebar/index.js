import React from 'react';

import MenuLinks from '../MenuLinks';

import * as S from './styled';

const Sidebar = () => (
  <S.SidebarWrapper>
    <S.SidebarLogo to="/">Sidebar</S.SidebarLogo>
    <MenuLinks />
  </S.SidebarWrapper>
);

export default Sidebar;
