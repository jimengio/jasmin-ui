import React from "react";

import Mention, { MentionProps } from "antd/lib/mention";

export interface JMMentionProps extends MentionProps {}

export default class JMMention extends React.Component<JMMentionProps> {
  render() {
    const { children, ...others } = this.props;
    return <Mention {...others}>{children}</Mention>;
  }
}
