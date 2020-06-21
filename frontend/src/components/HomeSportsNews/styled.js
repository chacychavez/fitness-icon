import styled from 'styled-components/macro';

export const SportsNewsContainer = styled.div`
  margin-top: 136px;
`;

export const SportsNewsBannerContainer = styled.div`
  position: relative;
`;

export const SportsNewsBanner = styled.div`
  margin-top: 70px;
  width: 100%;
  height: 521px;
  /* Use props.src */
  background: #c4c4c4;
`;

export const SportsNewsBannerDescriptionContainer = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.75);
  width: 500px;
  padding: 50px;
  left: 8%;
  bottom: 14%;
  color: #fff;
  text-align: left;

  header {
    font-family: 'Exo';
    font-weight: 900;
    font-size: 36px;
    margin-bottom: 5px;
    line-height: 44px;
  }

  span {
    font-family: Exo;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const SportsArticlesMainContainer = styled.div`
  padding: 0 120px;
`;

export const SportsArticlesContainer = styled.div`
  display: flex;
  margin-top: 50px;
  border-bottom: 1px dashed #dce2e2;
`;

export const SportsArticles = styled.div`
  width: 75vw;
`;

export const SportsArticle = styled.div`
  display: flex;
  padding: 30px 0;
  border-bottom: 1px dashed #dce2e2;
  width: 800px;
  margin-bottom: 20px;

  &:last-child {
    border-bottom: none;
  }
`;

export const SportsArticleImage = styled.img`
  border-radius: 8px;
`;

export const SportsArticleContentContainer = styled.div`
  text-align: left;
  width: 400px;
  margin-left: 40px;
`;

export const SportsArticleTitle = styled.header`
  font-size: 28px;
  font-family: 'Exo';
  font-weight: 800;
`;

export const SportsArticleInfo = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
`;

export const SportsArticleAuthor = styled.span`
  font-family: 'Exo';
  font-style: italic;
  font-weight: bold;
  font-size: 16px;

  span {
    font-weight: 600;
  }
`;
export const SportsArticleSport = styled.span`
  display: flex;
  padding: 0 10px;
  border-radius: 15px;
  background-color: #a1afaf;
  height: 23px;
  color: #fff;
  font-family: 'Exo';
  font-size: 12px;
  font-weight: bold;
  align-items: center;
  margin-left: 5px;
`;
export const SportsArticleContent = styled.article`
  font-family: 'Noto Serif', serif;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
`;

export const SportsAdContainer = styled.div`
  width: 25vw;
`;

export const SportsAdImage = styled.img``;
