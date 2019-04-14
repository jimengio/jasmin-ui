import React from "react";

import Tree, { TreeProps, DirectoryTreeProps, AntTreeNodeProps } from "antd/lib/tree";

export interface JMDirectoryTreeProps extends DirectoryTreeProps {}

class JMDirectoryTree extends React.Component<JMDirectoryTreeProps> {
  render() {
    const { children, ...others } = this.props;
    return <Tree.DirectoryTree {...others}>{children}</Tree.DirectoryTree>;
  }
}

export interface JMTreeNodeProps extends AntTreeNodeProps {}

class JMTreeNode extends React.Component<JMTreeNodeProps> {
  render() {
    const { children, ...others } = this.props;
    return <Tree.TreeNode {...others}>{children}</Tree.TreeNode>;
  }
}

export interface JMTreeProps extends TreeProps {}

export default class JMTree extends React.Component<JMTreeProps> {
  static TreeNode = JMTreeNode;

  static DirectoryTree = JMDirectoryTree;

  render() {
    const { children, ...others } = this.props;
    return <Tree {...others}>{children}</Tree>;
  }
}
