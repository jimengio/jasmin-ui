import React from "react";

import Menu, { MenuProps } from "antd/lib/menu";

export interface JMMenuProps extends MenuProps {}

export default class JMMenu extends React.Component<JMMenuProps> {
  static Item = Menu.Item;
  static ItemGroup = Menu.ItemGroup;
  static SubMenu = Menu.SubMenu;

  render() {
    return <Menu {...this.props}>{this.props.children}</Menu>;
  }
}
