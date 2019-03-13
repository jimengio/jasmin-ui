import React from "react";

import Calendar, { CalendarProps } from "antd/lib/calendar";

export interface JMCalendarProps extends CalendarProps {}

export default class JMCalendar extends React.Component<JMCalendarProps> {
  render() {
    return <Calendar {...this.props}>{this.props.children}</Calendar>;
  }
}
