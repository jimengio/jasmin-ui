import React from "react";

import Collapse, { CollapseProps, CollapsePanelProps } from "antd/lib/collapse";

export interface JMCollapsePanelProps extends CollapsePanelProps {}

class JMCollapsePanel extends React.Component<JMCollapsePanelProps> {
  render() {
    const { children, ...others } = this.props;
    return <Collapse.Panel {...others}>{children}</Collapse.Panel>;
  }
}

export interface JMCollapseProps extends CollapseProps {}

export default class JMCollapse extends React.Component<JMCollapseProps> {
  static Panel = JMCollapsePanel;

  render() {
    const { children, ...others } = this.props;
    return <Collapse {...others}>{children}</Collapse>;
  }
}
