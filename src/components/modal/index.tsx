import React from "react";

import Modal, { ModalProps } from "antd/lib/modal";

export interface JMModalProps extends ModalProps {}

export default class JMModal extends React.Component<JMModalProps> {
  render() {
    return <Modal {...this.props}>{this.props.children}</Modal>;
  }
}
