import React from "react";

import Layout, { LayoutProps, SiderProps } from "antd/lib/layout";

export interface JMSiderProps extends SiderProps {}

class JMLayoutSider extends React.Component<JMSiderProps> {
  render() {
    const { children, ...others } = this.props;
    return <Layout.Sider {...others}>{children}</Layout.Sider>;
  }
}

export interface JMLayoutProps extends LayoutProps {}

export default class JMLayout extends React.Component<JMLayoutProps> {
  static Content = Layout.Content;

  static Header = Layout.Header;

  static Footer = Layout.Footer;

  static Sider = JMLayoutSider;

  render() {
    const { children, ...others } = this.props;
    return <Layout {...others}>{children}</Layout>;
  }
}
