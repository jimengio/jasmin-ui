import React from "react";

import Tag, { TagProps } from "antd/lib/tag";

export interface JMTagProps extends TagProps {}

export default class JMTag extends React.Component<JMTagProps> {
  render() {
    const { children, ...others } = this.props;
    return <Tag {...others}>{children}</Tag>;
  }
}
