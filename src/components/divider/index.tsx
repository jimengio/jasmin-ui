import React from "react";

import Divider, { DividerProps } from "antd/lib/divider";

export interface JMDividerProps extends DividerProps {}

export default class JMDivider extends React.Component<JMDividerProps> {
  render() {
    const { children, ...others } = this.props;
    return <Divider {...others}>{children}</Divider>;
  }
}
