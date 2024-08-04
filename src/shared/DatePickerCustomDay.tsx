import React, { FC } from "react";

interface Props {
  dayOfMonth: number;
  date?: Date | undefined;
}

const DatePickerCustomDay: FC<Props> = ({ dayOfMonth }) => {
  return <span className="react-datepicker__day_span">{dayOfMonth}</span>;
};

export default DatePickerCustomDay;
