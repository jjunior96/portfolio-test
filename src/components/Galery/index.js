import React from 'react';

import Photo from '../Photo';

import * as S from './styled';

const Galery = () => (
  <S.GaleryWrapper>
    <Photo alt="Tucanos" />
    <Photo />
    <Photo />
    <Photo />
  </S.GaleryWrapper>
);

export default Galery;
