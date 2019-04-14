import React from "react";

import Spin, { SpinProps } from "antd/lib/spin";

export interface JMSpinProps extends SpinProps {}

export default class JMSpin extends React.Component<JMSpinProps> {
  render() {
    const { children, ...others } = this.props;
    return <Spin {...others}>{children}</Spin>;
  }
}
