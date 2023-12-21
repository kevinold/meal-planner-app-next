import { useState } from "react";

// You are a principal software engineer with many years of experience writing complex
// algorithms and write code using functional programming techniques
// writing pure functions and composition.

// Write a function, generateCalendar, composed of many smaller functions that builds a
// an array of dates composed of dates that will fit in a calendar display of 7 columns,
// one for each week days, and 6 rows that will return the days to display in the calendar
// for any date provided to it.

// An example of the dates array is:
// const days = [
//   { date: "2021-12-27" },
//   { date: "2021-12-28" },
//   { date: "2021-12-29" },
//   { date: "2021-12-30" },
//   { date: "2021-12-31" },
//   { date: "2022-01-01", isCurrentMonth: true },
//   { date: "2022-01-02", isCurrentMonth: true },
//   { date: "2022-01-03", isCurrentMonth: true },
//   { date: "2022-01-04", isCurrentMonth: true },
//   { date: "2022-01-05", isCurrentMonth: true },
//   { date: "2022-01-06", isCurrentMonth: true },
//   { date: "2022-01-07", isCurrentMonth: true },
//   { date: "2022-01-08", isCurrentMonth: true },
//   { date: "2022-01-09", isCurrentMonth: true },
//   { date: "2022-01-10", isCurrentMonth: true },
//   { date: "2022-01-11", isCurrentMonth: true },
//   { date: "2022-01-12", isCurrentMonth: true, isToday: true },
//   { date: "2022-01-13", isCurrentMonth: true },
//   { date: "2022-01-14", isCurrentMonth: true },
//   { date: "2022-01-15", isCurrentMonth: true },
//   { date: "2022-01-16", isCurrentMonth: true },
//   { date: "2022-01-17", isCurrentMonth: true },
//   { date: "2022-01-18", isCurrentMonth: true },
//   { date: "2022-01-19", isCurrentMonth: true },
//   { date: "2022-01-20", isCurrentMonth: true },
//   { date: "2022-01-21", isCurrentMonth: true },
//   { date: "2022-01-22", isCurrentMonth: true, isSelected: true },
//   { date: "2022-01-23", isCurrentMonth: true },
//   { date: "2022-01-24", isCurrentMonth: true },
//   { date: "2022-01-25", isCurrentMonth: true },
//   { date: "2022-01-26", isCurrentMonth: true },
//   { date: "2022-01-27", isCurrentMonth: true },
//   { date: "2022-01-28", isCurrentMonth: true },
//   { date: "2022-01-29", isCurrentMonth: true },
//   { date: "2022-01-30", isCurrentMonth: true },
//   { date: "2022-01-31", isCurrentMonth: true },
//   { date: "2022-02-01" },
//   { date: "2022-02-02" },
//   { date: "2022-02-03" },
//   { date: "2022-02-04" },
//   { date: "2022-02-05" },
//   { date: "2022-02-06" },
// ];

import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { flow, map, range } from "lodash/fp";

const generateCalendar = (date: Date) => {
  const formatDate = format(date, "yyyy-MM-dd");
  const startDay = startOfWeek(startOfMonth(date));
  const endDay = endOfWeek(endOfMonth(date));
  const totalDays = Math.ceil(
    (endDay.getTime() - startDay.getTime()) / (1000 * 60 * 60 * 24)
  );

  return flow(
    range(0),
    map((day: number) => {
      const currentDate = addDays(startDay, day);
      const formatCurrentDate = format(currentDate, "yyyy-MM-dd");
      const isCurrentMonth = currentDate.getMonth() === date.getMonth();
      const isToday = formatCurrentDate === formatDate;
      return {
        date: formatCurrentDate,
        ...(isCurrentMonth && { isCurrentMonth }),
        ...(isToday && { isToday }),
      };
    })
  )(totalDays);
};

const days = generateCalendar(new Date());
console.log(days);
const DateComponent = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <p>Current Date: {date.toDateString()}</p>
    </div>
  );
};

export default DateComponent;
