import React from "react";

import AutoComplete, { AutoCompleteProps } from "antd/lib/auto-complete";

export interface JMAutoCompleteProps extends AutoCompleteProps {}

export default class JMAutoComplete extends React.Component<JMAutoCompleteProps> {
  static Option = AutoComplete.Option;

  static OptGroup = AutoComplete.OptGroup;

  render() {
    const { children, ...others } = this.props;
    return <AutoComplete {...others}>{children}</AutoComplete>;
  }
}
