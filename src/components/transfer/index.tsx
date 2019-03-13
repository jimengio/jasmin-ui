import React from "react";

import Transfer, { TransferProps, TransferItem } from "antd/lib/transfer";

export interface JMTransferItem extends TransferItem {}

export interface JMTransferProps extends TransferProps {
  dataSource: JMTransferItem[];
  rowKey?: (record: JMTransferItem) => string;
}

export default class JMTransfer extends React.Component<JMTransferProps> {
  render() {
    return <Transfer {...this.props}>{this.props.children}</Transfer>;
  }
}
