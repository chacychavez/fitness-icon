import React from 'react';

import HomeHeader from '../HomeHeader';
import {
  ArticlesContainer,
  Articles,
  Article,
  ArticleImage,
  ArticleTitle,
} from './styled';

const articles = [
  { title: 'Inside Ground Zero of the Pandemic' },
  { title: "Why you're having 'COVID-Cravings' for weird foods" },
  { title: 'CrossFit Fights for the soul of a Tennessee County' },
  { title: '4 Days to get fresh food during the Coronavirus' },
  { title: 'This artificial blood might save countless lives' },
  { title: '3 self-care habit guys should practice sooner' },
  { title: 'The fatally slow quest for next-gen antibiotics' },
  { title: '6 new, hassle-free ways to see the doctor' },
];

const HomeArticles = () => (
  <ArticlesContainer>
    <HomeHeader>Fitness Articles</HomeHeader>
    <Articles>
      {articles.map((article) => (
        <Article key={article.title}>
          <ArticleImage src="https://via.placeholder.com/296x296" />
          <ArticleTitle>{article.title}</ArticleTitle>
        </Article>
      ))}
    </Articles>
  </ArticlesContainer>
);

export default HomeArticles;
