import React from "react";

import Switch, { SwitchProps } from "antd/lib/switch";

export interface JMSwitchProps extends SwitchProps {}

export default class JMSwitch extends React.Component<JMSwitchProps> {
  render() {
    const { children, ...others } = this.props;
    return <Switch {...others}>{children}</Switch>;
  }
}
