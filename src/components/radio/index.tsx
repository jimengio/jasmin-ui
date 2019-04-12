import React from "react";

import Radio, { RadioProps, RadioGroupProps } from "antd/lib/radio";

export interface JMRadioGroupProps extends RadioGroupProps {}

class RadioGroup extends React.Component<JMRadioGroupProps> {
  render() {
    const { children, ...others } = this.props;
    return <Radio.Group {...others}>{children}</Radio.Group>;
  }
}

export interface JMRadioProps extends RadioProps {}

export default class JMDivider extends React.Component<JMRadioProps> {
  static Group = RadioGroup;

  static Button = Radio.Button;

  render() {
    const { children, ...others } = this.props;
    return <Radio {...others}>{children}</Radio>;
  }
}
