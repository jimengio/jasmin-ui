import React from "react";

import { RowProps, ColProps, Row, Col } from "antd/lib/grid";

export interface JMRowProps extends RowProps {}

export class JMRow extends React.Component<JMRowProps> {
  render() {
    return <Row {...this.props}>{this.props.children}</Row>;
  }
}

export interface JMColProps extends ColProps {}

export class JMCol extends React.Component<JMColProps> {
  render() {
    return <Col {...this.props}>{this.props.children}</Col>;
  }
}
