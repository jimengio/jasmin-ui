import React from "react";

import Pagination, { PaginationProps } from "antd/lib/pagination";

export interface JMPaginationProps extends PaginationProps {}

export default class JMPagination extends React.Component<JMPaginationProps> {
  render() {
    const { children, ...others } = this.props;
    return <Pagination {...others}>{children}</Pagination>;
  }
}
