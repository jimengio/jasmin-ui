import React from "react";

import Drawer, { DrawerProps } from "antd/lib/drawer";

export interface JMDrawerProps extends DrawerProps {}

export default class JMDrawer extends React.Component<JMDrawerProps> {
  render() {
    return <Drawer {...this.props}>{this.props.children}</Drawer>;
  }
}
