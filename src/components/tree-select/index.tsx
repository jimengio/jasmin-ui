import React from "react";

import TreeSelect, { TreeNode, TreeSelectProps } from "antd/lib/tree-select";

export type JMTreeNode = TreeNode;

class JMTreeSelectNode extends React.Component<JMTreeNode> {
  render() {
    return (
      <TreeSelect.TreeNode {...this.props}>
        {this.props.children}
      </TreeSelect.TreeNode>
    );
  }
}

export interface JMTreeSelectProps extends TreeSelectProps {
  treeData?: JMTreeNode[];
}

export default class JMTreeSelect extends React.Component<JMTreeSelectProps> {
  static TreeNode = JMTreeSelectNode;

  render() {
    return <TreeSelect {...this.props}>{this.props.children}</TreeSelect>;
  }
}
