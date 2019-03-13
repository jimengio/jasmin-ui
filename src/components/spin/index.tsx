import React from "react";

import Spin, { SpinProps } from "antd/lib/spin";

export interface JMSpinProps extends SpinProps {}

export default class JMSpin extends React.Component<JMSpinProps> {
  render() {
    return <Spin {...this.props}>{this.props.children}</Spin>;
  }
}
