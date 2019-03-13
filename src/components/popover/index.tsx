import React from "react";

import Popover, { PopoverProps } from "antd/lib/popover";

export interface JMPopoverProps extends PopoverProps {}

export default class JMPopover extends React.Component<JMPopoverProps> {
  render() {
    return <Popover {...this.props}>{this.props.children}</Popover>;
  }
}
