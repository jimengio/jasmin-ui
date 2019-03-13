import React from "react";

import Upload, { UploadProps, UploadListProps } from "antd/lib/upload";
import { UploadFile } from "antd/lib/upload/interface";

export interface JMUploadListProps extends UploadListProps {}

export interface JMUploadFile extends UploadFile {}

export interface JMUploadProps extends UploadProps {}

export default class JMUpload extends React.Component<JMUploadProps> {
  render() {
    return <Upload {...this.props}>{this.props.children}</Upload>;
  }
}
