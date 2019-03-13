import React from "react";

import Checkbox, {
  CheckboxProps,
  CheckboxChangeEvent,
  CheckboxGroupProps,
  CheckboxOptionType
} from "antd/lib/checkbox";

export interface JMCheckboxChangeEvent extends CheckboxChangeEvent {}

export interface JMCheckboxOptionType extends CheckboxOptionType {}

export interface JMCheckboxGroupProps extends CheckboxGroupProps {}

class JMCheckboxGroup extends React.Component<JMCheckboxGroupProps> {
  render() {
    return (
      <Checkbox.Group {...this.props}>{this.props.children}</Checkbox.Group>
    );
  }
}

export interface JMCheckboxProps extends CheckboxProps {}

export default class JMCheckbox extends React.Component<JMCheckboxProps> {
  static Group = JMCheckboxGroup;

  render() {
    return <Checkbox {...this.props}>{this.props.children}</Checkbox>;
  }
}
