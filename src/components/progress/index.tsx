import React from "react";

import Progress, { ProgressProps } from "antd/lib/progress";

export interface JMProgressProps extends ProgressProps {}

export default class JMProgress extends React.Component<JMProgressProps> {
  render() {
    const { children, ...others } = this.props;
    return <Progress {...others}>{children}</Progress>;
  }
}
