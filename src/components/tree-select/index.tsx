import React from "react";

import TreeSelect, { TreeNode, TreeSelectProps } from "antd/lib/tree-select";

export type JMTreeNode = TreeNode;

class JMTreeSelectNode extends React.Component<JMTreeNode> {
  render() {
    const { children, ...others } = this.props;
    return <TreeSelect.TreeNode {...others}>{children}</TreeSelect.TreeNode>;
  }
}

export interface JMTreeSelectProps extends TreeSelectProps {
  treeData?: JMTreeNode[];
}

export default class JMTreeSelect extends React.Component<JMTreeSelectProps> {
  static TreeNode = JMTreeSelectNode;

  render() {
    const { children, ...others } = this.props;
    return <TreeSelect {...others}>{children}</TreeSelect>;
  }
}
