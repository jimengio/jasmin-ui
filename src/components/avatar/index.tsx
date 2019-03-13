import React from "react";

import Avatar, { AvatarProps } from "antd/lib/avatar";

export interface JMAvatarProps extends AvatarProps {}

export default class JMAvatar extends React.Component<JMAvatarProps> {
  render() {
    return <Avatar {...this.props}>{this.props.children}</Avatar>;
  }
}
