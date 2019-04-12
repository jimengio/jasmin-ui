import React from "react";

import { RowProps, ColProps, Row, Col } from "antd/lib/grid";

export interface JMRowProps extends RowProps {}

export class JMRow extends React.Component<JMRowProps> {
  render() {
    const { children, ...others } = this.props;
    return <Row {...others}>{children}</Row>;
  }
}

export interface JMColProps extends ColProps {}

export class JMCol extends React.Component<JMColProps> {
  render() {
    const { children, ...others } = this.props;
    return <Col {...others}>{children}</Col>;
  }
}
