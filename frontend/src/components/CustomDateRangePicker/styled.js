import styled from 'styled-components/macro';
import DateRangePicker from 'react-daterange-picker';
import 'react-daterange-picker/dist/css/react-calendar.css'; // For some basic styling. (OPTIONAL)

export const DateRangePickerContainer = styled.div`
  position: absolute;
  width: 630px;
  padding: 16px 0 30px 0;
  margin: 8px auto;
  background: #fdfefe;
  border: 1px solid #dde1e1;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-family: 'Exo';
  font-style: normal;
  text-align: center;

  hr {
    width: 580px;
    border: 1px solid #dae1e4;
    margin-bottom: 28px;
  }
`;

export const PickerHeader = styled.header`
  font-weight: bold;
  font-size: 16px;
`;

export const MonthSelector = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 12px 12px;
  justify-content: space-between;
  margin-top: 22px;
  padding: 0 30px;
`;

export const Month = styled.span`
  padding: 8px 0;
  width: 130px;
  background: ${(props) => (props.active ? '#FD5B00' : '#fdfefe')};
  border: 1px solid ${(props) => (props.active ? '#FF5D16' : '#a7aeaf')};
  color: ${(props) => (props.active ? '#fff' : '#000')};
  box-sizing: border-box;
  border-radius: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Button = styled.a`
  font-weight: 600;
  font-size: 16px;
  text-decoration-line: underline;
  cursor: pointer;
`;

export const DateRangePickerStyled = styled(DateRangePicker)`
  .DateRangePicker {
    display: inline-block;
    margin-bottom: 10px;
    padding: 0;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .DateRangePicker__Legend {
    color: #52575e;
    font-size: 14px;
    line-height: 16px;
    list-style-type: none;
    margin: 20px 0;
    padding: 0;
  }
  .DateRangePicker__LegendItem {
    display: inline-block;
    margin: 0 20px;
  }
  .DateRangePicker__LegendItemColor {
    border-radius: 50%;
    display: inline-block;
    height: 14px;
    margin-right: 6px;
    vertical-align: text-bottom;
    width: 14px;
    border: 1px solid rgba(0, 0, 0, 0.25);
  }
  .DateRangePicker__LegendItemColor--selection {
    background-color: #ff5d16;
  }
  .DateRangePicker__PaginationArrow {
    border: 0;
    cursor: pointer;
    display: block;
    height: 35px;
    outline: none;
    overflow: hidden;
    padding: 0;
    position: absolute;
    text-align: center;
    top: 0;
    white-space: nowrap;
    width: 35px;
    z-index: 1;
  }
  .DateRangePicker__PaginationArrow--previous {
    left: 20px;
    background: ${(props) => `url(${props.leftArrow})`};
    background-repeat: no-repeat;
    background-position: left center;
    .DateRangePicker__PaginationArrowIcon--previous {
      border: none;
    }
  }
  .DateRangePicker__PaginationArrow--next {
    right: 20px;
    background: ${(props) => `url(${props.rightArrow})`};
    background-repeat: no-repeat;
    background-position: right center;
    .DateRangePicker__PaginationArrowIcon--next {
      border: none;
    }
  }
  .DateRangePicker__PaginationArrow:hover {
    /* background-color: #ccc; */
  }
  .DateRangePicker__PaginationArrowIcon {
    border-bottom: 8px solid transparent;
    border-top: 8px solid transparent;
    height: 0;
    position: absolute;
    top: 10px;
    width: 0;
  }
  .DateRangePicker__PaginationArrowIcon--is-disabled {
    opacity: 0.25;
  }
  .DateRangePicker__PaginationArrowIcon--previous {
    border-left: 8px solid transparent;
    border-right: 8px solid #aaa;
    right: 11px;
  }
  .DateRangePicker__PaginationArrowIcon--next {
    border-left: 8px solid #aaa;
    border-right: 8px solid transparent;
    left: 11px;
  }
  .DateRangePicker__Month {
    color: #333;
    display: inline-block;
    margin: 0 20px;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 275px;
  }
  .DateRangePicker__MonthHeader {
    color: #000;
    font-size: 14px;
    font-weight: bold;
    height: 35px;
    line-height: 35px;
    position: relative;
    text-align: center;
  }
  .DateRangePicker__MonthHeaderLabel {
    display: inline-block;
    position: relative;
  }
  .DateRangePicker__MonthHeaderSelect {
    background: #e4e4e4;
    border: 0;
    cursor: pointer;
    display: inline-block;
    height: 100%;
    left: 0;
    margin: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 5;
    option {
      font-family: 'Exo';
      padding: 10px;
      height: 30px;
    }
  }
  .DateRangePicker__MonthDates {
    border-bottom: 1px solid #f4f5f6;
    border-collapse: separate;
    border-spacing: 0;
    margin: 0;
    width: 100%;
  }
  .DateRangePicker__WeekdayHeading,
  .DateRangePicker__Date {
    font-size: 12px;
    line-height: 1;
    padding: 10px 0;
    text-align: center;
    width: 14.285714285714286%;
  }
  .DateRangePicker__WeekdayHeading {
    border-bottom: 1px solid #a7aeaf;
    color: #000;
    font-weight: bold;
  }
  .DateRangePicker__WeekdayHeading abbr[title] {
    color: #000;
    cursor: pointer;
    font-size: inherit;
    text-decoration: none;
  }
  .DateRangePicker__Date {
    border: 0 solid #f4f5f6;
    border-right-width: 0;
    cursor: pointer;
    overflow: hidden;
    position: relative;
  }
  .DateRangePicker__Date:first-child {
    border-left-width: 0;
  }
  .DateRangePicker__Date--weekend {
    background-color: #f6f7f9;
    &:last-child {
      border-right: 1px solid #a7aeaf;
    }
  }
  .DateRangePicker__Date--otherMonth {
    opacity: 1;
    color: #9c9c9c;
  }
  .DateRangePicker__Date--is-disabled {
    color: #cdcdd1;
    cursor: default;
  }
  .DateRangePicker__Date--is-selected {
    color: #fff;
  }
  .DateRangePicker__Date--is-highlighted {
    color: #333;
  }
  .DateRangePicker__Date--otherMonth--is-selected {
    .DateRangePicker__CalendarSelection {
      opacity: 0.5;
    }
    .DateRangePicker__CalendarSelection--end {
      opacity: 1;
    }
  }

  .DateRangePicker__CalendarDatePeriod {
    bottom: 0;
    position: absolute;
    top: 0;
  }
  .DateRangePicker__CalendarDatePeriod--am {
    left: 0;
    right: 50%;
  }
  .DateRangePicker__CalendarDatePeriod--pm {
    left: 50%;
    right: 0;
  }
  .DateRangePicker__CalendarSelection {
    background-color: #ff5d16;
    border: 1px solid #eb401d;
    bottom: 5px;
    left: 0;
    position: absolute;
    right: 0;
    top: 5px;
  }
  .DateRangePicker__CalendarSelection--inOtherMonth {
    opacity: 1;
    color: #9c9c9c;
  }
  .DateRangePicker__CalendarSelection--start {
    border-bottom-left-radius: 5px;
    border-right-width: 0;
    border-top-left-radius: 5px;
    left: 5px;
  }
  .DateRangePicker__CalendarSelection--end {
    border-bottom-right-radius: 5px;
    border-left-width: 0;
    border-top-right-radius: 5px;
    right: 5px;
  }
  .DateRangePicker__CalendarSelection--segment {
    border-left-width: 0;
    border-right-width: 0;
    opacity: 0.75;
  }
  .DateRangePicker__CalendarSelection--single {
    border-radius: 5px;
    left: 5px;
    right: 5px;
  }
  .DateRangePicker__CalendarSelection--is-pending {
    background-color: rgba(237, 84, 52, 0.75);
    border-width: 0;
  }
  .DateRangePicker__CalendarHighlight {
    background-color: rgba(255, 255, 255, 0.25);
    border: 1px solid rgba(0, 0, 0, 0.25);
    bottom: 5px;
    left: 0;
    position: absolute;
    right: 0;
    top: 5px;
  }
  .DateRangePicker__CalendarHighlight--inOtherMonth {
    opacity: 1;
    color: #9c9c9c;
  }
  .DateRangePicker__CalendarHighlight--start {
    border-bottom-left-radius: 5px;
    border-right-width: 0;
    border-top-left-radius: 5px;
    left: 5px;
  }
  .DateRangePicker__CalendarHighlight--end {
    border-bottom-right-radius: 5px;
    border-left-width: 0;
    border-top-right-radius: 5px;
    right: 5px;
  }
  .DateRangePicker__CalendarHighlight--segment {
    border-left-width: 0;
    border-right-width: 0;
    opacity: 0.75;
  }
  .DateRangePicker__CalendarHighlight--single {
    background-color: #fff;
    border: 1px solid #eb401d;
    border-radius: 5px;
    left: 5px;
    right: 5px;
  }
  .DateRangePicker__HalfDateStates {
    bottom: -50px;
    left: -50px;
    position: absolute;
    right: -50px;
    top: -50px;
    transform: rotate(30deg);
  }
  .DateRangePicker__FullDateStates {
    bottom: 0;
    left: 0;
    position: absolute;
    right: -1px;
    top: -1px;
    border: 1px solid #a7aeaf;
  }
  .DateRangePicker__DateLabel {
    display: block;
    position: relative;
    text-align: center;
    width: 100%;
    z-index: 1;
    font-weight: 500;
    font-size: 14px;
  }
`;
