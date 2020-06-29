import React from 'react';

import PropTypes from 'prop-types';

import {
  ArticleSearchResultContainer,
  ArticleDatePublished,
  ArticleImg,
  ArticleInfo,
  ArticleTitle,
  ArticleAuthor,
  ArticlePreviewContent,
} from './styled';

const ArticleSearchResult = ({
  title,
  author,
  publishDate,
  previewContent,
}) => (
  <ArticleSearchResultContainer>
    <ArticleImg src="https://via.placeholder.com/156x128" />
    <ArticleInfo>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleAuthor>
        <span>By</span> {author}
      </ArticleAuthor>
      <ArticlePreviewContent>{previewContent}</ArticlePreviewContent>
    </ArticleInfo>
    <ArticleDatePublished>Posted {publishDate}</ArticleDatePublished>
  </ArticleSearchResultContainer>
);

ArticleSearchResult.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  publishDate: PropTypes.string,
  previewContent: PropTypes.string,
};

ArticleSearchResult.defaultProps = {
  title: '',
  author: '',
  publishDate: '',
  previewContent: '',
};

export default ArticleSearchResult;
