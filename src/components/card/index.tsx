import React from "react";

import Card, { CardProps, CardGridProps, CardMetaProps } from "antd/lib/card";

export interface JMCardGridProps extends CardGridProps {}

class JMCardGrid extends React.Component<JMCardGridProps> {
  render() {
    const { children, ...others } = this.props;
    return <Card.Grid {...others}>{children}</Card.Grid>;
  }
}

export interface JMCardMetaProps extends CardMetaProps {}

class JMCardMeta extends React.Component<JMCardMetaProps> {
  render() {
    const { children, ...others } = this.props;
    return <Card.Meta {...others}>{children}</Card.Meta>;
  }
}

export interface JMCardProps extends CardProps {}

export default class JMCard extends React.Component<JMCardProps> {
  static Grid = JMCardGrid;

  static Meta = JMCardMeta;

  render() {
    const { children, ...others } = this.props;
    return <Card {...others}>{children}</Card>;
  }
}
