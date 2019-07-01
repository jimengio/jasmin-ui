import React from "react";

import ConfigProvider, { ConfigConsumerProps } from "antd/lib/config-provider";

export interface JMConfigProviderProps extends ConfigConsumerProps {}

export default class JMConfigProvider extends React.Component<ConfigConsumerProps> {
  render() {
    const { children, ...otherProps } = this.props;
    return <ConfigProvider {...otherProps}>{children}</ConfigProvider>;
  }
}
