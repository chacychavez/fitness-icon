import React, { useMemo, useRef, useState } from 'react';

import { useLocation } from 'react-router-dom';

import dateSearch from '../../assets/images/date-search-filter.svg';
import mapPin from '../../assets/images/map-pin.svg';
import ArticleSearchResult from '../../components/ArticleSearchResult';
import ClassSearchResult from '../../components/ClassSearchResult';
import EventSearchResult from '../../components/EventSearchResult';
import CustomDateRangePicker from '../../components/CustomDateRangePicker';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import {
  SearchResultsMainContainer,
  SearchResultsNavbar,
  SearchTextHeader,
  SearchTabs,
  SearchTab,
  SearchResultsFilterSort,
  SearchResultsFilter,
  SearchFilterInput,
  SearchFilterDateContainer,
  SearchFilterDate,
  SearchResultsSort,
  SearchSortText,
  SearchResultsContainer,
} from './styled';

const useQuery = () => new URLSearchParams(useLocation().search);

const searchTabs = [
  { id: 'events', text: 'Sports events' },
  { id: 'classes', text: 'Classes' },
  { id: 'articles', text: 'Articles' },
];

const SearchResults = () => {
  const query = useQuery();
  const [activeTab, setActiveTab] = useState('events');
  const [activeSortText, setActiveSortText] = useState('date');
  const [dates, setDates] = useState(null);
  const [openPicker, setOpenPicker] = useState(false);

  const ref = useRef();

  useOnClickOutside(ref, () => {
    if (!openPicker) setOpenPicker(false);
  });

  const onApply = (_dates) => {
    setDates(_dates);
    setOpenPicker(false);
  };

  const sortTexts = useMemo(() => {
    const texts = [{ id: 'date', text: 'Date' }];
    if (activeTab === 'articles') texts.push({ id: 'author', text: 'Author' });
    else texts.push({ id: 'price', text: 'Price' });
    return texts;
  }, [activeTab]);

  const searchResults = {
    events: [
      {
        date: {
          month: 'January',
          day: '28',
        },
        name: 'Power UP Novice Competition',
        levels: ['Novice', 'Experienced', 'Elite'],
        location: 'Quezon City, NCR',
        price: 'Php 250 - 500',
      },
      {
        date: {
          month: 'May',
          day: '31',
        },
        name: 'Centro Atletico Climbing Festival',
        levels: ['Novice', 'Experienced', 'Elite'],
        location: 'Quezon City, NCR',
        price: 'Php 250 - 500',
      },
      {
        date: {
          month: 'June',
          day: '1',
        },
        name: 'Climb Central Manila Climbing Competition',
        levels: ['Novice', 'Experienced', 'Elite'],
        location: 'Quezon City, NCR',
        price: 'Php 250 - 500',
      },
    ],
    classes: [
      {
        name: 'Power UP Beginner Sessions',
        place: 'Power UP Gym',
        schedule: {
          dates: ['Mo', 'Tu', 'We', 'Th', 'Fr'],
          time: '4:30PM',
        },
        location: 'Quezon City, NCR',
        price: 'Php 250 - 500',
      },
      {
        name: 'Climb Central Manila Starter Clinic',
        place: 'Climb Central Manila',
        schedule: {
          dates: ['June 25, Thursday'],
          time: '4:30PM',
        },
        location: 'Pasig City, NCR',
        price: 'Php 250 - 500',
      },
      {
        name: 'Climb Central Manila Starter Clinic II',
        place: 'Climb Central Manila',
        schedule: {
          dates: ['June 25, Thursday'],
          time: '4:30PM',
        },
        location: 'Pasig City, NCR',
        price: 'Php 250 - 500',
      },
    ],
    articles: [
      {
        title: 'Running as Told by “The Last Dance”',
        author: 'Jordan Smith',
        publishDate: '14 Jun 2020',
        previewContent:
          'In the ESPN documentary The Last Dance, Michael Jordan finally and unapologetically acknowledged saying “Republicans buy sneakers, too,” calling it an “off the cuff” joke to his Chicago Bulls ...',
      },
      {
        title: 'Diamond League Announces Revised Race Calendar',
        author: 'Jordan Smith',
        publishDate: '14 Jun 2020',
        previewContent:
          'In the ESPN documentary The Last Dance, Michael Jordan finally and unapologetically acknowledged saying “Republicans buy sneakers, too,” calling it an “off the cuff” joke to his Chicago Bulls ...',
      },
      {
        title: 'How to Dress for Warm-weather Runs',
        author: 'Jordan Smith',
        publishDate: '14 Jun 2020',
        previewContent:
          'In the ESPN documentary The Last Dance, Michael Jordan finally and unapologetically acknowledged saying “Republicans buy sneakers, too,” calling it an “off the cuff” joke to his Chicago Bulls ...',
      },
      {
        title: 'Obstacle Course Races Want More Kids',
        author: 'Jordan Smith',
        publishDate: '14 Jun 2020',
        previewContent:
          'In the ESPN documentary The Last Dance, Michael Jordan finally and unapologetically acknowledged saying “Republicans buy sneakers, too,” calling it an “off the cuff” joke to his Chicago Bulls ...',
      },
    ],
  };

  const renderSearchResult = (result) => {
    if (activeTab === 'events') {
      return (
        <EventSearchResult
          date={result.date}
          name={result.name}
          levels={result.levels}
          location={result.location}
          price={result.price}
        />
      );
    }
    if (activeTab === 'classes') {
      return (
        <ClassSearchResult
          name={result.name}
          place={result.place}
          schedule={result.schedule}
          location={result.location}
          price={result.price}
        />
      );
    }
    if (activeTab === 'articles') {
      return (
        <ArticleSearchResult
          title={result.title}
          author={result.author}
          publishDate={result.publishDate}
          previewContent={result.previewContent}
        />
      );
    }
    return null;
  };

  return (
    <SearchResultsMainContainer>
      <SearchResultsNavbar>
        <SearchTextHeader>{query.get('text')}</SearchTextHeader>
        <SearchTabs>
          {searchTabs.map((tab) => (
            <SearchTab
              key={tab.id}
              active={tab.id === activeTab}
              onClick={() => {
                setActiveTab(tab.id);
              }}
            >
              {tab.text}
            </SearchTab>
          ))}
        </SearchTabs>
      </SearchResultsNavbar>
      <SearchResultsFilterSort>
        {activeTab !== 'articles' && (
          <SearchResultsFilter>
            <SearchFilterInput
              type="text"
              placeholder="Filter by location.."
              icon={mapPin}
            />
            <SearchFilterDateContainer>
              <SearchFilterDate
                onClick={() => {
                  setOpenPicker(!openPicker);
                }}
              >
                Filter by date
                <img
                  src={dateSearch}
                  alt="Date search filter"
                  width={16}
                  height={16}
                />
              </SearchFilterDate>
              {openPicker && (
                <CustomDateRangePicker
                  ref={ref}
                  onApply={onApply}
                  onClear={() => {
                    setOpenPicker(false);
                  }}
                />
              )}
            </SearchFilterDateContainer>
          </SearchResultsFilter>
        )}
        <SearchResultsSort>
          <span>Sort by:</span>
          {sortTexts.map((sort) => (
            <SearchSortText
              key={sort.id}
              active={sort.id === activeSortText}
              onClick={() => {
                setActiveSortText(sort.id);
              }}
            >
              {sort.text}
            </SearchSortText>
          ))}
        </SearchResultsSort>
      </SearchResultsFilterSort>
      <div>
        <span>{dates && dates.start.format()}</span>
        <span>{dates && dates.end.format()}</span>
      </div>
      <SearchResultsContainer>
        {searchResults[activeTab].map((result) => renderSearchResult(result))}
      </SearchResultsContainer>
    </SearchResultsMainContainer>
  );
};

export default SearchResults;
