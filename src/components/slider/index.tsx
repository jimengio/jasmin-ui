import React from "react";

import Slider, { SliderProps, SliderMarks, SliderValue } from "antd/lib/slider";

export interface JMSliderMarks extends SliderMarks {}

export type JMSliderValue = SliderValue;

export interface JMSliderProps extends SliderProps {
  marks?: JMSliderMarks;
  value?: JMSliderValue;
}

export default class JMSlider extends React.Component<JMSliderProps> {
  render() {
    return <Slider {...this.props}>{this.props.children}</Slider>;
  }
}
