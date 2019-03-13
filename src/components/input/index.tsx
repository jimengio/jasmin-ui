import React from "react";

import Input, { InputProps } from "antd/lib/input";

export interface JMInputProps extends InputProps {}

export default class JMInput extends React.Component<JMInputProps> {
  render() {
    return <Input {...this.props} />;
  }
}
