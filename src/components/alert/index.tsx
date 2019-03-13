import React from "react";

import Alert, { AlertProps } from "antd/lib/alert";

export interface JMAlertProps extends AlertProps {}

export default class JMAlert extends React.Component<JMAlertProps> {
  render() {
    return <Alert {...this.props}>{this.props.children}</Alert>;
  }
}
