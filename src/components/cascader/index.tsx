import React from "react";

import Cascader, { CascaderProps } from "antd/lib/cascader";

export interface JMCascaderProps extends CascaderProps {}

export default class JMCascader extends React.Component<JMCascaderProps> {
  render() {
    const { children, ...others } = this.props;
    return <Cascader {...others}>{children}</Cascader>;
  }
}
