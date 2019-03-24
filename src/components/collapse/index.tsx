import React from "react";

import Collapse, { CollapseProps, CollapsePanelProps } from "antd/lib/collapse";

export interface JMCollapsePanelProps extends CollapsePanelProps {}

class JMCollapsePanel extends React.Component<JMCollapsePanelProps> {
  render() {
    return <Collapse.Panel {...this.props}>{this.props.children}</Collapse.Panel>;
  }
}

export interface JMCollapseProps extends CollapseProps {}

export default class JMCollapse extends React.Component<JMCollapseProps> {
  static Panel = JMCollapsePanel;

  render() {
    return <Collapse {...this.props}>{this.props.children}</Collapse>;
  }
}
