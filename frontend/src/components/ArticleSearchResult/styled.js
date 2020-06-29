import styled from 'styled-components/macro';

export const ArticleSearchResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 28px 0;
  border: none;
  border-bottom: 1px dashed #dce2e2;
  font-family: 'Exo';
`;

export const ArticleImg = styled.img`
  border-radius: 5px;
  margin-right: 36px;
`;

export const ArticleInfo = styled.div``;

export const ArticleTitle = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const ArticleAuthor = styled.div`
  font-style: italic;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;

  span {
    font-weight: 600;
    color: #777777;
  }
`;

export const ArticlePreviewContent = styled.article`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;

export const ArticleDatePublished = styled.div`
  width: 250px;
  font-style: italic;
  font-weight: 500;
  font-size: 14px;
  color: #777777;
  text-align: right;
`;
