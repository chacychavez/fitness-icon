import React from 'react';

import HomeHeader from '../HomeHeader';
import {
  SportsNewsContainer,
  SportsNewsBannerContainer,
  SportsNewsBanner,
  SportsNewsBannerDescriptionContainer,
  SportsArticlesMainContainer,
  SportsArticlesContainer,
  SportsArticles,
  SportsArticle,
  SportsArticleImage,
  SportsArticleContentContainer,
  SportsArticleTitle,
  SportsArticleInfo,
  SportsArticleAuthor,
  SportsArticleSport,
  SportsArticleContent,
  SportsAdContainer,
  SportsAdImage,
} from './styled';

const sportsArticles = [
  {
    title: 'Obstacle Course Races Wants More Kids',
    author: 'Hilary Potkewitz',
    sport: 'Obstacle Course Racing',
    content:
      "As some events' popularity cools, organizers are trying to draw more kids and families.",
  },
  {
    title: 'Running as Told by "The Last Dance"',
    author: 'Jordan Smith',
    sport: 'Running',
    content: 'Turns out Air Jordan is more relatable than you thought.',
  },
  {
    title: 'Runner Recovers from near-fatal case of COVID-19',
    author: 'Jordan Smith',
    sport: 'Fitness',
    content:
      'What started as a mild fever turned into a harrowing experience for Joshua Fiske.',
  },
  {
    title: 'Diamond League Announces Revised Race Calendar',
    author: 'Hilary Potkewitz',
    sport: 'Running',
    content:
      'A limited series of international meets is slated to begin in late August.',
  },
  {
    title: 'How to Dress for Warm-Weather Runs',
    author: 'Hilary Potkewitz',
    sport: 'Boxing',
    content:
      'Master spring and summer running with this guide to dressing for temeratures above 50.',
  },
];

const HomeSportsNews = () => (
  <SportsNewsContainer>
    <HomeHeader>Sports news</HomeHeader>
    <SportsNewsBannerContainer>
      {/* TODO: Improve how to display banner image */}
      <SportsNewsBanner src="https://via.placeholder.com/1680x512" />
      <SportsNewsBannerDescriptionContainer>
        <header>Why are Obstacle-Course Races So Popular?</header>
        <span>
          As marathon participation declines, more people are signing up for
          extreme events such as Spartan and Tough Mudder.
        </span>
      </SportsNewsBannerDescriptionContainer>
    </SportsNewsBannerContainer>
    <SportsArticlesMainContainer>
      <SportsArticlesContainer>
        <SportsArticles>
          {sportsArticles.map((sportsArticle) => (
            <SportsArticle key={sportsArticle.title}>
              <SportsArticleImage src="https://via.placeholder.com/300x200" />
              <SportsArticleContentContainer>
                <SportsArticleTitle>{sportsArticle.title}</SportsArticleTitle>
                <SportsArticleInfo>
                  <SportsArticleAuthor>
                    <span>By</span> {sportsArticle.author} <span>in</span>{' '}
                  </SportsArticleAuthor>
                  <SportsArticleSport>{sportsArticle.sport}</SportsArticleSport>
                </SportsArticleInfo>
                <SportsArticleContent>
                  {sportsArticle.content}
                </SportsArticleContent>
              </SportsArticleContentContainer>
            </SportsArticle>
          ))}
        </SportsArticles>
        <SportsAdContainer>
          <SportsAdImage src="https://via.placeholder.com/400x1000" />
        </SportsAdContainer>
      </SportsArticlesContainer>
    </SportsArticlesMainContainer>
  </SportsNewsContainer>
);

export default HomeSportsNews;
