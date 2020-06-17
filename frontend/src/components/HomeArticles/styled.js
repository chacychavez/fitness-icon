import styled from 'styled-components/macro';

export const ArticlesContainer = styled.div``;
export const Articles = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 50px;
  padding: 50px 100px;
`;

export const Article = styled.div`
  display: grid;
`;
export const ArticleImage = styled.img``;
export const ArticleTitle = styled.header`
  width: 300px;
  line-height: 30px;
  font-weight: bold;
  font-size: 20px;
  text-align: left;
`;
