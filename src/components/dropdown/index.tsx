import React from "react";

import Dropdown, { DropDownProps, DropdownButtonProps } from "antd/lib/dropdown";

export interface JMDropdownButtonProps extends DropdownButtonProps {}

class JMDropdownButton extends React.Component<JMDropdownButtonProps> {
  render() {
    const { children, ...others } = this.props;
    return <Dropdown.Button {...others}>{children}</Dropdown.Button>;
  }
}

export interface JMDropdownProps extends DropDownProps {}

export default class JMDropdown extends React.Component<DropDownProps> {
  static Button = JMDropdownButton;

  render() {
    const { children, ...others } = this.props;
    return <Dropdown {...others}>{children}</Dropdown>;
  }
}
