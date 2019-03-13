import React from "react";

import Badge, { BadgeProps } from "antd/lib/badge";

export interface JMBadgeProps extends BadgeProps {}

export default class JMBadge extends React.Component<JMBadgeProps> {
  render() {
    return <Badge {...this.props}>{this.props.children}</Badge>;
  }
}
