import React from "react";

import Steps, { StepProps, StepsProps } from "antd/lib/steps";

export interface JMStepProps extends StepProps {}

class JMStep extends React.Component<JMStepProps> {
  render() {
    const { children, ...others } = this.props;
    return <Steps.Step {...others}>{children}</Steps.Step>;
  }
}

export interface JMStepsProps extends StepsProps {}

export default class JMSteps extends React.Component<JMStepsProps> {
  static Step = JMStep;

  render() {
    const { children, ...others } = this.props;
    return <Steps {...others}>{children}</Steps>;
  }
}
