import React from "react";

import Drawer, { DrawerProps } from "antd/lib/drawer";

export interface JMDrawerProps extends DrawerProps {}

export default class JMDrawer extends React.Component<JMDrawerProps> {
  render() {
    const { children, ...others } = this.props;
    return <Drawer {...others}>{children}</Drawer>;
  }
}
