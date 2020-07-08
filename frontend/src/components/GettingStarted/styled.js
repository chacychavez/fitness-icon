import styled from 'styled-components/macro';

export const GettingStartedContainer = styled.div``;

export const GettingStartedDescription = styled.article`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #6d7577;
`;

export const GettingStartedQuestions = styled.div``;

export const GettingStartedQuestion = styled.div``;

export const QuestionHeader = styled.header`
  font-weight: 600;
  font-size: 20px;
  margin-top: 35px;
`;

export const Options = styled.div`
  margin: 10px 0 64px 0;
`;

export const Option = styled.div`
  border-bottom: 1px solid #c4c4c4;
  padding: 16px 0;

  &:last-child {
    border: none;
  }
`;

export const OptionHeader = styled.header`
  display: flex;
  align-items: center;
  font-weight: 800;
  font-size: 20px;
  cursor: pointer;

  img {
    margin-right: 14px;
  }
`;

export const OptionDescription = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  margin-top: 8px;
  padding-left: 38px;
  color: #444545;
`;
