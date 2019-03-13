import React from "react";

import Statistic from "antd/lib/statistic";
import { StatisticProps } from "antd/lib/statistic/Statistic";

export interface JMStatisticProps extends StatisticProps {}

export default class JMStatistic extends React.Component<JMStatisticProps> {
  render() {
    return <Statistic {...this.props}>{this.props.children}</Statistic>;
  }
}
