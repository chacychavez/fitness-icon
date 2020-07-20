import React, { useState, useMemo } from 'react';

import Moment from 'moment';
import { extendMoment } from 'moment-range';
import PropTypes from 'prop-types';

import leftArrow from '../../assets/images/arrow-left.svg';
import rightArrow from '../../assets/images/arrow-right.svg';
import {
  DateRangePickerContainer,
  PickerHeader,
  MonthSelector,
  Month,
  DateRangePickerStyled,
  ButtonsContainer,
  Button,
} from './styled';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const moment = extendMoment(Moment);
const CustomDateRangePicker = React.forwardRef(({ onApply, onClear }, ref) => {
  const [dates, setDates] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [datePickerKey, setDatePickerKey] = useState(Math.random());

  const onSelect = (_dates) => {
    setDates(_dates);
    setSelectedMonth(null);
  };

  const selectMonth = (month) => {
    setSelectedMonth(month);
    setDates(moment.range(moment(), moment()));
    setDatePickerKey(Math.random());
  };

  const apply = () => {
    let dateRange = {};
    if (selectedMonth) {
      const start = moment().month(selectedMonth);
      if (months[moment().month()] !== selectedMonth) {
        start.date(1);
      }
      const end = moment(start).endOf('month');
      dateRange = moment.range(start, end);
    } else {
      dateRange = dates;
    }
    onApply(dateRange);
  };

  const clear = () => {
    setDates(moment.range(moment(), moment()));
    setSelectedMonth(null);
    onClear();
  };

  const monthsSelections = useMemo(() => {
    let startIndex = parseInt(moment().format('M'), 10) - 1;
    const nextYear = parseInt(moment().year(), 10) + 1;
    const items = [];
    for (let i = 0; i < 8; i += 1, startIndex += 1) {
      items.push(
        `${months[startIndex % 12]}${startIndex < 12 ? '' : ` ${nextYear}`}`,
      );
    }
    return items;
  }, []);

  return (
    <DateRangePickerContainer ref={ref}>
      <PickerHeader>Select by month</PickerHeader>
      <MonthSelector>
        {monthsSelections.map((month) => (
          <Month
            active={selectedMonth === month}
            onClick={() => {
              selectMonth(month);
            }}
          >
            {month}
          </Month>
        ))}
      </MonthSelector>
      <hr />
      <PickerHeader>By date range</PickerHeader>
      <DateRangePickerStyled
        key={datePickerKey}
        rightArrow={rightArrow}
        leftArrow={leftArrow}
        minimumDate={new Date()}
        onSelect={onSelect}
        value={dates}
        disableNavigation
        numberOfCalendars={2}
        initialDate={new Date()}
        initialFromValue
      />
      <ButtonsContainer>
        <Button onClick={clear}>Clear</Button>
        <Button onClick={apply}>Apply</Button>
      </ButtonsContainer>
    </DateRangePickerContainer>
  );
});

CustomDateRangePicker.propTypes = {
  onApply: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default CustomDateRangePicker;
