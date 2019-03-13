import React from "react";

import Progress, { ProgressProps } from "antd/lib/progress";

export interface JMProgressProps extends ProgressProps {}

export default class JMProgress extends React.Component<JMProgressProps> {
  render() {
    return <Progress {...this.props}>{this.props.children}</Progress>;
  }
}
