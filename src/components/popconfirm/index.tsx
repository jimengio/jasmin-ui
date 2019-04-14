import React from "react";

import Popconfirm, { PopconfirmProps } from "antd/lib/popconfirm";

export interface JMPopconfirmProps extends PopconfirmProps {}

export default class JMPopconfirm extends React.Component<JMPopconfirmProps> {
  render() {
    const { children, ...others } = this.props;
    return <Popconfirm {...others}>{children}</Popconfirm>;
  }
}
