import React from "react";

import TimePicker, { TimePickerProps } from "antd/lib/time-picker";

export interface JMTimePickerProps extends TimePickerProps {}

export default class JMTimePicker extends React.Component<JMTimePickerProps> {
  render() {
    return <TimePicker {...this.props}>{this.props.children}</TimePicker>;
  }
}
