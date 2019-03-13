import React from "react";

import Pagination, { PaginationProps } from "antd/lib/pagination";

export interface JMPaginationProps extends PaginationProps {}

export default class JMPagination extends React.Component<JMPaginationProps> {
  render() {
    return <Pagination {...this.props}>{this.props.children}</Pagination>;
  }
}
