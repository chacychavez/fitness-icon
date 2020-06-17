import styled from 'styled-components/macro';

export const SportsNewsContainer = styled.div``;

export const SportsNewsBannerContainer = styled.div`
  position: relative;
`;

export const SportsNewsBannerImage = styled.img``;

export const SportsNewsBannerDescriptionContainer = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.75);
  width: 500px;
  padding: 50px;
  left: 10%;
  bottom: 15%;
  color: #fff;
  text-align: left;

  header {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 14px;
  }
`;

export const SportsArticlesContainer = styled.div`
  display: flex;
  margin-top: 50px;
  padding: 0 120px;
`;

export const SportsArticles = styled.div`
  width: 75vw;
`;

export const SportsArticle = styled.div`
  display: flex;
  padding: 30px;
  justify-content: center;
  border-bottom: 1px solid #aaa;
  width: 800px;
  margin-bottom: 20px;
`;

export const SportsArticleImage = styled.img``;

export const SportsArticleContentContainer = styled.div`
  text-align: left;
  width: 400px;
  margin-left: 40px;
`;

export const SportsArticleTitle = styled.header`
  font-size: 28px;
  font-weight: bold;
`;

export const SportsArticleInfo = styled.div`
  margin: 10px 0;
`;

export const SportsArticleAuthor = styled.span``;
export const SportsArticleSport = styled.span`
  display: inline-block;
  padding: 6px;
  border-radius: 15px;
  background-color: #aaa;
  color: #fff;
  font-size: 12px;
`;
export const SportsArticleContent = styled.article`
  line-height: 24px;
`;

export const SportsAdContainer = styled.div`
  width: 25vw;
`;

export const SportsAdImage = styled.img``;
