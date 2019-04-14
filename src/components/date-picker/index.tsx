import React from "react";

import DatePicker from "antd/lib/date-picker";
import { DatePickerProps, RangePickerProps, MonthPickerProps, WeekPickerProps, RangePickerValue } from "antd/lib/date-picker/interface";

// 周选择器
export interface JMWeekPickerProps extends WeekPickerProps {}

class JMWeekPicker extends React.Component<JMWeekPickerProps> {
  render() {
    const { children, ...others } = this.props;
    return <DatePicker.WeekPicker {...others}>{children}</DatePicker.WeekPicker>;
  }
}

//月份选择器
export interface JMMonthPickerProps extends MonthPickerProps {}

class JMMonthPicker extends React.Component<JMMonthPickerProps> {
  render() {
    const { children, ...others } = this.props;
    return <DatePicker.MonthPicker {...others}>{children}</DatePicker.MonthPicker>;
  }
}

//时间区间选择器
export type JMRangePickerValue = RangePickerValue;

export interface JMRangePickerProps extends RangePickerProps {}

class JMRangePicker extends React.Component<JMRangePickerProps> {
  render() {
    const { children, ...others } = this.props;
    return <DatePicker.RangePicker {...others}>{children}</DatePicker.RangePicker>;
  }
}

//时间选择器
export interface JMDatePickerProps extends DatePickerProps {}

export default class JMDatePicker extends React.Component<JMDatePickerProps> {
  static RangePicker = JMRangePicker;

  static WeekPicker = JMWeekPicker;

  static MonthPicker = JMMonthPicker;

  render() {
    const { children, ...others } = this.props;
    return <DatePicker {...others}>{children}</DatePicker>;
  }
}
