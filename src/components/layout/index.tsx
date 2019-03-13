import React from "react";

import Layout, { LayoutProps, SiderProps } from "antd/lib/layout";

export interface JMSiderProps extends SiderProps {}

class JMLayoutSider extends React.Component<JMSiderProps> {
  render() {
    return <Layout.Sider {...this.props}>{this.props.children}</Layout.Sider>;
  }
}

export interface JMLayoutProps extends LayoutProps {}

export default class JMLayout extends React.Component<JMLayoutProps> {
  static Content = Layout.Content;

  static Header = Layout.Header;

  static Footer = Layout.Footer;

  static Sider = JMLayoutSider;

  render() {
    return <Layout {...this.props}>{this.props.children}</Layout>;
  }
}
