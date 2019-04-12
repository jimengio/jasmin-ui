import React from "react";

import Transfer, { TransferProps, TransferItem } from "antd/lib/transfer";

export interface JMTransferItem extends TransferItem {}

export interface JMTransferProps extends TransferProps {
  dataSource: JMTransferItem[];
  rowKey?: (record: JMTransferItem) => string;
}

export default class JMTransfer extends React.Component<JMTransferProps> {
  render() {
    const { children, ...others } = this.props;
    return <Transfer {...others}>{children}</Transfer>;
  }
}
