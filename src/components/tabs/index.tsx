import React from "react";

import Tabs, { TabsProps, TabPaneProps } from "antd/lib/tabs";

export interface JMTabPaneProps extends TabPaneProps {}

class JMTabPane extends React.Component<JMTabPaneProps> {
  render() {
    const { children, ...others } = this.props;
    return <Tabs.TabPane {...others}>{children}</Tabs.TabPane>;
  }
}

export interface JMTabsProps extends TabsProps {}

export default class JMTabs extends React.Component<JMTabsProps> {
  static TabPane = JMTabPane;

  render() {
    const { children, ...others } = this.props;
    return <Tabs {...others}>{children}</Tabs>;
  }
}
