import React from "react";

import Popconfirm, { PopconfirmProps } from "antd/lib/popconfirm";

export interface JMPopconfirmProps extends PopconfirmProps {}

export default class JMPopconfirm extends React.Component<JMPopconfirmProps> {
  render() {
    return <Popconfirm {...this.props}>{this.props.children}</Popconfirm>;
  }
}
