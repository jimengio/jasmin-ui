import React from "react";

import Rate, { RateProps } from "antd/lib/rate";

export interface JMRateProps extends RateProps {}

export default class JMRate extends React.Component<JMRateProps> {
  render() {
    const { children, ...others } = this.props;
    return <Rate {...others}>{children}</Rate>;
  }
}
