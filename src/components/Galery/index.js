import React from 'react';

import Photo from '../Photo';
import SectionHead from '../SectionHead';

import * as S from './styled';

const Galery = () => {
  return (
    <>
      <SectionHead />
      <S.GaleryWrapper>
        <Photo alt="Tucanos" />
        <Photo />
        <Photo />
        <Photo />
      </S.GaleryWrapper>
    </>
  );
};

export default Galery;
