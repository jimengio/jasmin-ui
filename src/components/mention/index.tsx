import React from "react";

import Mention, { MentionProps } from "antd/lib/mention";

export interface JMMentionProps extends MentionProps {}

export default class JMMention extends React.Component<JMMentionProps> {
  render() {
    return <Mention {...this.props}>{this.props.children}</Mention>;
  }
}
