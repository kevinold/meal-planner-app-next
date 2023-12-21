import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  addDays,
  differenceInDays,
  endOfMonth,
  endOfWeek,
  format,
  formatISO,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { flow, map, range } from "lodash/fp";
import { useReducer } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const generateCalendar = (baseDate: Date) => {
  const startDay = startOfWeek(startOfMonth(baseDate), { weekStartsOn: 1 });
  const endDay = endOfWeek(endOfMonth(baseDate), { weekStartsOn: 1 });
  const totalDays = differenceInDays(endDay, startDay) + 1;

  return flow(
    range(0),
    map((day: number) => {
      const iterateDate = addDays(startDay, day);

      return {
        date: formatISO(iterateDate, { representation: "date" }),
        ...(isSameMonth(baseDate, iterateDate) && { isCurrentMonth: true }),
        ...(isToday(iterateDate) && { isToday: true }),
      };
    })
  )(totalDays);
};

const initialState = {
  days: generateCalendar(new Date()),
  calMonth: new Date(),
  calMonthName: format(new Date(), "MMMM"),
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LAST_MONTH":
      return {
        ...state,
        days: generateCalendar(subMonths(state.calMonth, 1)),
        calMonth: subMonths(state.calMonth, 1),
        calMonthName: format(subMonths(state.calMonth, 1), "MMMM"),
      };
    case "NEXT_MONTH":
      return {
        ...state,
        days: generateCalendar(subMonths(state.calMonth, -1)),
        calMonth: subMonths(state.calMonth, -1),
        calMonthName: format(subMonths(state.calMonth, -1), "MMMM"),
      };
    case "SELECT_DAY":
      return {
        ...state,
        days: state.days.map((d) => {
          // if date is already selected, clear it
          if (d.isSelected) {
            return { ...d, isSelected: false };
          }
          // if date is not selected, and matches set isSelected to true
          if (d.date === action.payload) {
            return { ...d, isSelected: true };
          }
          return d;
        }),
      };
    default:
      return state;
  }
};

const Calendar = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

  function handleLastMonth() {
    dispatch({ type: "LAST_MONTH" });
  }

  function handleNextMonth() {
    dispatch({ type: "NEXT_MONTH" });
  }

  function handleDayClick(day) {
    dispatch({ type: "SELECT_DAY", payload: day.date });
  }

  return (
    <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
      <div className="flex items-center text-gray-900">
        <button
          onClick={handleLastMonth}
          type="button"
          className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Previous month</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <div className="flex-auto text-sm font-semibold">
          {state.calMonthName}
        </div>
        <button
          onClick={handleNextMonth}
          type="button"
          className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Next month</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
        <div>S</div>
      </div>
      <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
        {state.days.map((day, dayIdx) => (
          <button
            onClick={() => handleDayClick(day)}
            key={day.date}
            type="button"
            className={classNames(
              "py-1.5 hover:bg-gray-100 focus:z-10",
              day.isCurrentMonth ? "bg-white" : "bg-gray-50",
              (day.isSelected || day.isToday) && "font-semibold",
              day.isSelected && "text-white",
              !day.isSelected &&
                day.isCurrentMonth &&
                !day.isToday &&
                "text-gray-900",
              !day.isSelected &&
                !day.isCurrentMonth &&
                !day.isToday &&
                "text-gray-400",
              day.isToday && !day.isSelected && "text-indigo-600",
              dayIdx === 0 && "rounded-tl-lg",
              dayIdx === 6 && "rounded-tr-lg",
              dayIdx === state.days.length - 7 && "rounded-bl-lg",
              dayIdx === state.days.length - 1 && "rounded-br-lg"
            )}
          >
            <time
              dateTime={day.date}
              className={classNames(
                "mx-auto flex h-7 w-7 items-center justify-center rounded-full",
                day.isSelected && day.isToday && "bg-indigo-600",
                day.isSelected && !day.isToday && "bg-gray-900"
              )}
            >
              {day.date.split("-").pop().replace(/^0/, "")}
            </time>
          </button>
        ))}
      </div>
      <button
        type="button"
        className="mt-8 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add event
      </button>
    </div>
  );
};

export default Calendar;
