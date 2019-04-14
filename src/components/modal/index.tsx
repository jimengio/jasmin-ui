import React from "react";

import Modal, { ModalProps } from "antd/lib/modal";

export interface JMModalProps extends ModalProps {}

export default class JMModal extends React.Component<JMModalProps> {
  render() {
    const { children, ...others } = this.props;
    return <Modal {...others}>{children}</Modal>;
  }
}
