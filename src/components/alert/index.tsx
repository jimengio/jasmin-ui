import React from "react";

import Alert, { AlertProps } from "antd/lib/alert";

export interface JMAlertProps extends AlertProps {}

export default class JMAlert extends React.Component<JMAlertProps> {
  render() {
    const { children, ...others } = this.props;
    return <Alert {...others}>{children}</Alert>;
  }
}
