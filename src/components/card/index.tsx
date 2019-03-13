import React from "react";

import Card, { CardProps, CardGridProps, CardMetaProps } from "antd/lib/card";

export interface JMCardGridProps extends CardGridProps {}

class JMCardGrid extends React.Component<JMCardGridProps> {
  render() {
    return <Card.Grid {...this.props}>{this.props.children}</Card.Grid>;
  }
}

export interface JMCardMetaProps extends CardMetaProps {}

class JMCardMeta extends React.Component<JMCardMetaProps> {
  render() {
    return <Card.Meta {...this.props}>{this.props.children}</Card.Meta>;
  }
}

export interface JMCardProps extends CardProps {}

export default class JMCard extends React.Component<JMCardProps> {
  static Grid = JMCardGrid;

  static Meta = JMCardMeta;

  render() {
    return <Card {...this.props}>{this.props.children}</Card>;
  }
}
