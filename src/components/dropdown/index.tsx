import React from "react";

import Dropdown, {
  DropDownProps,
  DropdownButtonProps
} from "antd/lib/dropdown";

export interface JMDropdownButtonProps extends DropdownButtonProps {}

class JMDropdownButton extends React.Component<JMDropdownButtonProps> {
  render() {
    return (
      <Dropdown.Button {...this.props}>{this.props.children}</Dropdown.Button>
    );
  }
}

export interface JMDropdownProps extends DropDownProps {}

export default class JMDropdown extends React.Component<DropDownProps> {
  static Button = JMDropdownButton;

  render() {
    return <Dropdown {...this.props}>{this.props.children}</Dropdown>;
  }
}
