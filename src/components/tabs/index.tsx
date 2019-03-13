import React from "react";

import Tabs, { TabsProps, TabPaneProps } from "antd/lib/tabs";

export interface JMTabPaneProps extends TabPaneProps {}

class JMTabPane extends React.Component<JMTabPaneProps> {
  render() {
    return <Tabs.TabPane {...this.props}>{this.props.children}</Tabs.TabPane>;
  }
}

export interface JMTabsProps extends TabsProps {}

export default class JMTabs extends React.Component<JMTabsProps> {
  static TabPane = JMTabPane;

  render() {
    return <Tabs {...this.props}>{this.props.children}</Tabs>;
  }
}
