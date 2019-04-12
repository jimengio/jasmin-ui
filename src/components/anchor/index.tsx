import React from "react";

import Anchor, { AnchorProps, AnchorLinkProps } from "antd/lib/anchor";

export interface JMAnchorLinkProps extends AnchorLinkProps {}

class JMAnchorLink extends React.Component<JMAnchorLinkProps> {
  render() {
    const { children, ...others } = this.props;
    return <Anchor.Link {...others}>{children}</Anchor.Link>;
  }
}

export interface JMAnchorProps extends AnchorProps {}

export default class JMAnchor extends React.Component<JMAnchorProps> {
  static Link = JMAnchorLink;

  render() {
    const { children, ...others } = this.props;
    return <Anchor {...others}>{children}</Anchor>;
  }
}
