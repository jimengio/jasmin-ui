import React from "react";

import Breadcrumb, { BreadcrumbProps, BreadcrumbItemProps } from "antd/lib/breadcrumb";

export interface JMBreadcrumbItemProps extends BreadcrumbItemProps {}

class JMBreadcrumbItem extends React.Component<JMBreadcrumbItemProps> {
  render() {
    const { children, ...others } = this.props;
    return <Breadcrumb.Item {...others}>{children}</Breadcrumb.Item>;
  }
}

export interface JMBreadcrumbProps extends BreadcrumbProps {}

export default class JMBreadcrumb extends React.Component<JMBreadcrumbProps> {
  static Item = JMBreadcrumbItem;

  render() {
    const { children, ...others } = this.props;
    return <Breadcrumb {...others}>{children}</Breadcrumb>;
  }
}
