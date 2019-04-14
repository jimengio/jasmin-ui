import React from "react";

import Comment, { CommentProps } from "antd/lib/comment";

export interface JMCommentProps extends CommentProps {}

export default class JMComment extends React.Component<JMCommentProps> {
  render() {
    const { children, ...others } = this.props;
    return <Comment {...others}>{children}</Comment>;
  }
}
