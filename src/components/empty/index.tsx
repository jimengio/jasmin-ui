import React from "react";

import Empty, { EmptyProps } from "antd/lib/empty";

export interface JMEmptyProps extends EmptyProps {}

export default class JMEmpty extends React.Component<JMEmptyProps> {
  render() {
    const { children, ...others } = this.props;
    return <Empty {...others}>{children}</Empty>;
  }
}
