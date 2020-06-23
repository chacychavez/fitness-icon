import styled from 'styled-components/macro';

export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ArticleBanner = styled.div`
  margin-top: 64px;
  height: 530px;
  width: 100%;
  /* Use props.src */
  background: #c4c4c4;
`;

export const ArticleHeader = styled.header`
  width: 60vw;
  margin-top: 43px;
  font-family: 'Exo';
  font-size: 52px;
  font-weight: 800;
  text-align: center;
  line-height: 69px;
`;

export const ArticleInfo = styled.div`
  text-align: center;
`;

export const ArticleAuthorSport = styled.div`
  display: flex;
  margin: 10px 0;
`;

export const ArticleAuthor = styled.span`
  font-family: 'Exo';
  font-size: 20px;
  font-weight: 600;
  font-weight: bold;

  span {
    font-weight: 600;
  }
`;

export const ArticleSport = styled.span`
  display: flex;
  padding: 0 10px;
  border-radius: 15px;
  background-color: #6f6f6f;
  height: 25px;
  color: #fff;
  font-family: 'Exo';
  font-size: 12px;
  font-weight: bold;
  align-items: center;
  margin-left: 5px;
`;

export const ArticleDate = styled.span`
  font-family: 'Exo';
  font-weight: 600;
  font-size: 16px;
  color: #6f6f6f;
`;

export const ArticleContent = styled.article`
  font-family: 'Noto Serif';
  width: 628px;
  font-size: 18px;
  line-height: 36px;
  margin: 20px 0;
`;

export const ArticleAdBannerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 259px;
  background-color: #f3f5f5;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const ArticleAdBanner = styled.img``;

export const ArticleShare = styled.div`
  margin-top: 20px;
  font-family: Exo;
  font-weight: 800;
  font-size: 24px;
`;

export const ArticleShareLinks = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: center;
`;

export const ArticleShareLink = styled.div`
  img {
    margin: 0 6px;
  }
`;

export const ArticleAuthorBioContainer = styled.div`
  margin-top: 55px;
  border-top: 2px dashed #c4c4c4;
  border-bottom: 2px dashed #c4c4c4;
  width: 628px;
  padding: 28px 0;
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthorImage = styled.img`
  border-radius: 44px;
`;

export const AuthorNameRole = styled.div`
  margin-left: 14px;
`;

export const AuthorName = styled.span`
  display: block;
  font-family: 'Exo';
  font-weight: bold;
  font-size: 18px;
`;

export const AuthorRole = styled.span`
  display: block;
  font-family: 'Exo';
  font-style: italic;
  font-weight: 600;
  font-size: 16px;
  color: #6f6f6f;
`;

export const AuthorBio = styled.article`
  margin-top: 18px;
  font-family: 'Exo';
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
`;

export const AuthorPageLinks = styled.div`
  margin-top: 14px;
  display: flex;
`;

export const AuthorPageLink = styled.div`
  margin-right: 10px;
`;

export const RelatedStoriesContainer = styled.div`
  margin: 42px 0 150px 0;
`;

export const RelatedStoriesHeader = styled.header`
  font-family: 'Exo';
  font-weight: 800;
  font-size: 52px;
  line-height: 69px;
  text-align: center;
`;

export const RelatedStories = styled.div`
  display: flex;
`;

export const RelatedStory = styled.div`
  width: 296px;
  margin: 36px;
`;

export const StoryImage = styled.img`
  border-radius: 8px;
`;

export const StoryTitle = styled.header`
  margin-top: 14px;
  font-family: 'Exo';
  font-weight: 800;
  font-size: 20px;
`;
