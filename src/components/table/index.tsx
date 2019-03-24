import React from "react";

import Table, { TableProps, ColumnProps, TableComponents, TableRowSelection } from "antd/lib/table";
import ColumnGroup, { ColumnGroupProps } from "antd/lib/table/ColumnGroup";

export interface JMTableComponents extends TableComponents {}

export interface JMTableRowSelection<T> extends TableRowSelection<T> {}

export interface JMColumnGroupProps extends ColumnGroupProps {}

class JMColumnGroup extends React.Component<JMColumnGroupProps> {
  render() {
    return <ColumnGroup {...this.props}>{this.props.children}</ColumnGroup>;
  }
}

export interface JMColumnProps<T> extends ColumnProps<T> {}

class TableColumn<T> extends React.Component<JMColumnProps<T>> {
  render() {
    return <Table.Column {...this.props}>{this.props.children}</Table.Column>;
  }
}

export interface JMTableProps<T> extends TableProps<T> {
  columns?: JMColumnProps<T>[];
  onHeaderRow?: (columns: JMColumnProps<T>[], index: number) => any;
  rowSelection?: JMTableRowSelection<T>;
  components?: JMTableComponents;
}

export default class JMTable<T> extends React.Component<JMTableProps<T>> {
  static Column = TableColumn;

  static ColumnGroup = JMColumnGroup;

  render() {
    return <Table {...this.props}>{this.props.children}</Table>;
  }
}
