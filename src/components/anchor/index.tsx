import React from "react";

import Anchor, { AnchorProps, AnchorLinkProps } from "antd/lib/anchor";

export interface JMAnchorLinkProps extends AnchorLinkProps {}

class JMAnchorLink extends React.Component<JMAnchorLinkProps> {
  render() {
    return <Anchor.Link {...this.props}>{this.props.children}</Anchor.Link>;
  }
}

export interface JMAnchorProps extends AnchorProps {}

export default class JMAnchor extends React.Component<JMAnchorProps> {
  static Link = JMAnchorLink;

  render() {
    return <Anchor {...this.props}>{this.props.children}</Anchor>;
  }
}
