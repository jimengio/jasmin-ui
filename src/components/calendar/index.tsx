import React from "react";

import Calendar, { CalendarProps } from "antd/lib/calendar";

export interface JMCalendarProps extends CalendarProps {}

export default class JMCalendar extends React.Component<JMCalendarProps> {
  render() {
    const { children, ...others } = this.props;
    return <Calendar {...others}>{children}</Calendar>;
  }
}
