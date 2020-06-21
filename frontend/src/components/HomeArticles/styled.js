import styled from 'styled-components/macro';

export const ArticlesContainer = styled.div`
  margin-top: 40px;
  padding: 0 20px;
`;

export const Articles = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 32px;
  padding: 50px 100px;
`;

export const Article = styled.div`
  display: grid;
`;

export const ArticleImage = styled.img`
  border-radius: 8px;
`;

export const ArticleTitle = styled.header`
  width: 300px;
  text-align: left;
  font-family: 'Exo';
  font-weight: 800;
  font-size: 18px;
  line-height: 24px;
  margin-top: 18px;
`;
