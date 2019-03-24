import React from "react";

import Tree, { TreeProps, DirectoryTreeProps, AntTreeNodeProps } from "antd/lib/tree";

export interface JMDirectoryTreeProps extends DirectoryTreeProps {}

class JMDirectoryTree extends React.Component<JMDirectoryTreeProps> {
  render() {
    return <Tree.DirectoryTree {...this.props}>{this.props.children}</Tree.DirectoryTree>;
  }
}

export interface JMTreeNodeProps extends AntTreeNodeProps {}

class JMTreeNode extends React.Component<JMTreeNodeProps> {
  render() {
    return <Tree.TreeNode {...this.props}>{this.props.children}</Tree.TreeNode>;
  }
}

export interface JMTreeProps extends TreeProps {}

export default class JMTree extends React.Component<JMTreeProps> {
  static TreeNode = JMTreeNode;

  static DirectoryTree = JMDirectoryTree;

  render() {
    return <Tree {...this.props}>{this.props.children}</Tree>;
  }
}
