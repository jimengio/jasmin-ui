import React from "react";

import Tooltip, { TooltipProps } from "antd/lib/tooltip";

export interface JMTooltipProps extends TooltipProps {}

export default class JMTooltip extends React.Component<JMTooltipProps> {
  render() {
    const { children, ...others } = this.props;
    return <Tooltip {...others}>{children}</Tooltip>;
  }
}
