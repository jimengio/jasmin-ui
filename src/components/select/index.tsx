import React from "react";

import Select, { SelectProps, OptionProps, OptGroupProps } from "antd/lib/select";

export interface JMSelectOptionProps extends OptionProps {}

class JMSelectOption extends React.Component<JMSelectOptionProps> {
  render() {
    return <Select.Option {...this.props}>{this.props.children}</Select.Option>;
  }
}

//group
export interface JMSelectOptGroupProps extends OptGroupProps {}

class JMSelectOptGroup extends React.Component<JMSelectOptGroupProps> {
  render() {
    return <Select.OptGroup {...this.props}>{this.props.children}</Select.OptGroup>;
  }
}

export interface JMSelectProps extends SelectProps {}

export default class JMSelect extends React.Component<JMSelectProps> {
  static Option = JMSelectOption;

  static OptGroup = JMSelectOptGroup;

  render() {
    return <Select {...this.props}>{this.props.children}</Select>;
  }
}
