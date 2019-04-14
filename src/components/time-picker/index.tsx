import React from "react";

import TimePicker, { TimePickerProps } from "antd/lib/time-picker";

export interface JMTimePickerProps extends TimePickerProps {}

export default class JMTimePicker extends React.Component<JMTimePickerProps> {
  render() {
    const { children, ...others } = this.props;
    return <TimePicker {...others}>{children}</TimePicker>;
  }
}
