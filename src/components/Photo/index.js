import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as S from './styled';

const Photo = () => {
  const { corvo } = useStaticQuery(
    graphql`
      query {
        corvo: file(relativePath: { eq: "21.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return (
    <S.PhotoWrapper>
      <S.PhotoItem>
        <Img
          fluid={corvo.childImageSharp.fluid}
          alt="Desenho Corvo"
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </S.PhotoItem>
    </S.PhotoWrapper>
  );
};

export default Photo;
