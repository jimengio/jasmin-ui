import React from "react";

import Select, { SelectProps, OptionProps, OptGroupProps } from "antd/lib/select";

export interface JMSelectOptionProps extends OptionProps {}

class JMSelectOption extends React.Component<JMSelectOptionProps> {
  render() {
    const { children, ...others } = this.props;
    return <Select.Option {...others}>{children}</Select.Option>;
  }
}

//group
export interface JMSelectOptGroupProps extends OptGroupProps {}

class JMSelectOptGroup extends React.Component<JMSelectOptGroupProps> {
  render() {
    const { children, ...others } = this.props;
    return <Select.OptGroup {...others}>{children}</Select.OptGroup>;
  }
}

export interface JMSelectProps extends SelectProps {}

export default class JMSelect extends React.Component<JMSelectProps> {
  static Option = JMSelectOption;

  static OptGroup = JMSelectOptGroup;

  render() {
    const { children, ...others } = this.props;
    return <Select {...others}>{children}</Select>;
  }
}
