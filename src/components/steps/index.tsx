import React from "react";

import Steps, { StepProps, StepsProps } from "antd/lib/steps";

export interface JMStepProps extends StepProps {}

class JMStep extends React.Component<JMStepProps> {
  render() {
    return <Steps.Step {...this.props}>{this.props.children}</Steps.Step>;
  }
}

export interface JMStepsProps extends StepsProps {}

export default class JMSteps extends React.Component<JMStepsProps> {
  static Step = JMStep;

  render() {
    return <Steps {...this.props}>{this.props.children}</Steps>;
  }
}
