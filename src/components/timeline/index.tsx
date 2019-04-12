import React from "react";

import Timeline, { TimelineProps, TimeLineItemProps } from "antd/lib/timeline";

export interface JMTimelineItemProps extends TimeLineItemProps {}

class JMTimelineItem extends React.Component<JMTimelineItemProps> {
  render() {
    const { children, ...others } = this.props;
    return <Timeline.Item {...others}>{children}</Timeline.Item>;
  }
}

export interface JMTimelineProps extends TimelineProps {}

export default class JMTimeline extends React.Component<JMTimelineProps> {
  static Item = JMTimelineItem;

  render() {
    const { children, ...others } = this.props;
    return <Timeline {...others}>{children}</Timeline>;
  }
}
