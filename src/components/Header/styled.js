import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 64px;
  /* padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto; */

  background: rgba(51, 51, 51, 0.72);

  position: fixed;
  top: 0;

  left: 0;
  right: 0;

  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;

  padding: 20px 0;

  align-items: center;
`;

export const HeaderContainer = styled.section`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const HeaderMain = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1800px;
`;

export const HeaderLogo = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const HeaderMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
