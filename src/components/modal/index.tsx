import React from "react";

import Modal, { ModalProps, ModalFuncProps } from "antd/lib/modal";
import { ModalFunc } from "antd/lib/modal/Modal";

export interface JMModalProps extends ModalProps {}

export default class JMModal extends React.Component<JMModalProps> {
  static info: ModalFunc = Modal.info;
  static success: ModalFunc = Modal.success;
  static error: ModalFunc = Modal.error;
  static warn: ModalFunc = Modal.warn;
  static warning: ModalFunc = Modal.warning;
  static confirm: ModalFunc = Modal.confirm;
  static destroyAll: () => void = Modal.destroyAll;

  render() {
    const { children, ...others } = this.props;
    return <Modal {...others}>{children}</Modal>;
  }
}
