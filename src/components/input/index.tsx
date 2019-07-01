import React from "react";

import Input, { InputProps, SearchProps, TextAreaProps, PasswordProps, GroupProps } from "antd/lib/input";

export interface JMInputProps extends InputProps {}

export interface JMSearchProps extends SearchProps {}

export interface JMTextAreaProps extends TextAreaProps {}

export interface JMPasswordProps extends PasswordProps {}

export interface JMGroupProps extends GroupProps {}

export default class JMInput extends React.Component<JMInputProps> {
  static Search = Input.Search;

  static TextArea = Input.TextArea;

  static Password = Input.Password;

  static Group = Input.Group;

  render() {
    const { children, ...others } = this.props;
    return <Input {...others} />;
  }
}
