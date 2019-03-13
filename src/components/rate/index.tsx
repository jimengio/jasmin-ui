import React from "react";

import Rate, { RateProps } from "antd/lib/rate";

export interface JMRateProps extends RateProps {}

export default class JMRate extends React.Component<JMRateProps> {
  render() {
    return <Rate {...this.props}>{this.props.children}</Rate>;
  }
}
