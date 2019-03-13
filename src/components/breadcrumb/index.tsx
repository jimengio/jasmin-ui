import React from "react";

import Breadcrumb, {
  BreadcrumbProps,
  BreadcrumbItemProps
} from "antd/lib/breadcrumb";

export interface JMBreadcrumbItemProps extends BreadcrumbItemProps {}

class JMBreadcrumbItem extends React.Component<JMBreadcrumbItemProps> {
  render() {
    return (
      <Breadcrumb.Item {...this.props}>{this.props.children}</Breadcrumb.Item>
    );
  }
}

export interface JMBreadcrumbProps extends BreadcrumbProps {}

export default class JMBreadcrumb extends React.Component<JMBreadcrumbProps> {
  static Item = JMBreadcrumbItem;

  render() {
    return <Breadcrumb {...this.props}>{this.props.children}</Breadcrumb>;
  }
}
