import React from "react";

import InputNumber, { InputNumberProps } from "antd/lib/input-number";

export interface JMInputNumberProps extends InputNumberProps {}

export default class JMInputNumber extends React.Component<JMInputNumberProps> {
  render() {
    const { children, ...others } = this.props;
    return <InputNumber {...others} />;
  }
}
