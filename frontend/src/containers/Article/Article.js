import React from 'react';

import emailSquare from '../../assets/images/email-square.svg';
import fbSquare from '../../assets/images/fb-square.svg';
import fb from '../../assets/images/fb.svg';
import ig from '../../assets/images/ig.svg';
import twitterSquare from '../../assets/images/twitter-square.svg';
import twitter from '../../assets/images/twitter.svg';
import {
  ArticleContainer,
  ArticleBanner,
  ArticleHeader,
  ArticleInfo,
  ArticleAuthorSport,
  ArticleAuthor,
  ArticleSport,
  ArticleDate,
  ArticleContent,
  ArticleAdBannerContainer,
  ArticleAdBanner,
  ArticleShare,
  ArticleShareLinks,
  ArticleShareLink,
  ArticleAuthorBioContainer,
  AuthorInfo,
  AuthorImage,
  AuthorNameRole,
  AuthorName,
  AuthorRole,
  AuthorBio,
  AuthorPageLinks,
  AuthorPageLink,
  RelatedStoriesContainer,
  RelatedStoriesHeader,
  RelatedStories,
  RelatedStory,
  StoryImage,
  StoryTitle,
} from './styled';

const Article = () => {
  const article = {
    title:
      "U.P. Men's Track & Field Team Finally Ends Decade-Long Title Drought",
    author: 'Bianca Ramos',
    sport: 'Running',
    date: 'May 27, 2020',
    content:
      "Track and field is a sport dominated by individual events. These events include throwing, sprinting, distance running, and jumping. But in the UAAP, track and field is considered a team sport in that, individual efforts are scored and totaled to garner a team score. The team with the highest grand total will be crowned champion at the end of the games.\nSince the foundation of the UAAP in 1938, the University of the Philippines Track and Field team has been champion 18 times-- second most wins in the history of UAAP Athletics.\nA number of these championships were orchestrated by former Olympian, Pete Subido. Subido, who was once called the \"asia's fastest man on the bend,\" led UP to multiple championships both as a star athlete and as a coach.\nDominant as the team was, their winning ways came to a halt in 1982 when UP won its last UAAP track and field championship led by their captain, Gap Legaspi. Gap, who was recently elected to be PGH chairman, was a consistent medalist in the hurdle events while his two younger brothers dominated the sprints and middle distance races.\nThe UP Track and Field team may not have been as successful since then, but there were still athletes who shone despite the team falling short of podium finishes. Athletes such as Rio de la Cruz, Karl Francisco, Javier Luis Gomez, Sandino Yuzon, Joanne Lu, Precious de Leon just to name a few.\nFrom 2001 to 2005, Rio de la Cruz was able to set the records for the 1500, 5000, and 10000m runs and bag the Rookie of the Year award; from 2007-2009, Karl Francisco won three consecutive gold medals in the hammer throw; from 2006-2009 Javier Luis Gomez set the records for both the Javelin throw and the decathlon; while Sandino, Joanne, and Precious were gold medalists in their respective events in the years 2007 and 2010.\nIn recent competitions, the team seems to have found its stride with athletes performing better and the whole group placing higher in UAAP rankings. In the last four years, Felix Camagay, Percival Quiambao, and Fel Quetulio were able to bag gold medals in the hammer throw; Kat Baron won two consecutive golds in the pole vault; Mic Baguisa and Elijah Guevara were champions in the discus throw; Gabriel Soriano won Gold in the 400m dash; David Managuelod and Jao Nasis won silver in the pole vault and high jump respectively, Beth Capioso won silver for both the 5000 and 10000m race walks; Jaime Mejia won bronze in the 110m and 400m hurdles; the men's relay teams won silver in both the 4x100m and 4x400m relays; and twice in the last 3 years, the men's team finished third in the overall standings.\nThis year, with alumnus Rio de la Cruz at the helm, and led by captains Fel Quetulio and Steff Legaspi, the UP Track and field team is looking to surpass last year's third place finish and uphold the University's mantra: Honor and Excellence.",
  };

  const contentTokens = article.content.split('\n');

  const author = {
    name: 'Bianca Ramos',
    role: 'Fitness Enthusiast',
    bio:
      'A caffeine-powered weeb with a nursing background and a knack for athleticism and the outdoors, Bianca tries her hand at just about anything concerning health and fitness. She writes first-hand of her experiences and escapades with workouts and diets so you don’t go poking around in complete darkness while you endeavor in your fitness journey. ',
    pageLink: {
      facebook: '',
      twitter: '',
      instagram: '',
    },
  };

  const relatedStories = [
    { title: 'Obstacle Course Races Want More Kids' },
    {
      title: 'Running as Told by “The Last Dance”',
    },
    { title: 'Runner Recovers from near-fatal case of COVID-19' },
    {
      title: 'Diamond League Announces Revised Race Calendar',
    },
  ];

  return (
    <ArticleContainer>
      {/* TODO: Improve how to display banner image */}
      <ArticleBanner src="https://via.placeholder.com/1680x530" />
      <ArticleHeader>{article.title}</ArticleHeader>
      <ArticleInfo>
        <ArticleAuthorSport>
          <ArticleAuthor>
            <span>By</span> {article.author} <span>in</span>
          </ArticleAuthor>
          <ArticleSport>{article.sport}</ArticleSport>
        </ArticleAuthorSport>
        <ArticleDate>{article.date}</ArticleDate>
      </ArticleInfo>
      {contentTokens.slice(0, 3).map((paragraph) => (
        <ArticleContent>{paragraph}</ArticleContent>
      ))}
      <ArticleAdBannerContainer>
        <ArticleAdBanner src="https://via.placeholder.com/737x190" />
      </ArticleAdBannerContainer>
      {contentTokens.slice(3, contentTokens.length).map((paragraph) => (
        <ArticleContent>{paragraph}</ArticleContent>
      ))}
      <ArticleShare>
        Share this Article
        <ArticleShareLinks>
          <ArticleShareLink>
            <img src={fbSquare} alt="social" width={32} height={32} />
          </ArticleShareLink>
          <ArticleShareLink>
            <img src={twitterSquare} alt="social" width={32} height={32} />
          </ArticleShareLink>
          <ArticleShareLink>
            <img src={emailSquare} alt="social" width={32} height={32} />
          </ArticleShareLink>
        </ArticleShareLinks>
      </ArticleShare>
      <ArticleAuthorBioContainer>
        <AuthorInfo>
          <AuthorImage src="https://via.placeholder.com/44x44" />
          <AuthorNameRole>
            <AuthorName>{author.name}</AuthorName>
            <AuthorRole>{author.role}</AuthorRole>
          </AuthorNameRole>
        </AuthorInfo>
        <AuthorBio>{author.bio}</AuthorBio>
        <AuthorPageLinks>
          <AuthorPageLink>
            <img src={fb} alt="social" width={24} height={24} />
          </AuthorPageLink>
          <AuthorPageLink>
            <img src={twitter} alt="social" width={24} height={24} />
          </AuthorPageLink>
          <AuthorPageLink>
            <img src={ig} alt="social" width={24} height={24} />
          </AuthorPageLink>
        </AuthorPageLinks>
      </ArticleAuthorBioContainer>
      <RelatedStoriesContainer>
        <RelatedStoriesHeader>Related Stories</RelatedStoriesHeader>
        <RelatedStories>
          {relatedStories.map((relatedStory) => (
            <RelatedStory key={relatedStory.title}>
              <StoryImage src="https://via.placeholder.com/296x296" />
              <StoryTitle>{relatedStory.title}</StoryTitle>
            </RelatedStory>
          ))}
        </RelatedStories>
      </RelatedStoriesContainer>
    </ArticleContainer>
  );
};

export default Article;
