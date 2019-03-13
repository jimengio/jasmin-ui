import React from "react";

import Comment, { CommentProps } from "antd/lib/comment";

export interface JMCommentProps extends CommentProps {}

export default class JMComment extends React.Component<JMCommentProps> {
  render() {
    return <Comment {...this.props}>{this.props.children}</Comment>;
  }
}
