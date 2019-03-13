import React from "react";

import Skeleton, { SkeletonProps } from "antd/lib/skeleton";
import { SkeletonAvatarProps } from "antd/lib/skeleton/Avatar";
import { SkeletonParagraphProps } from "antd/lib/skeleton/Paragraph";
import { SkeletonTitleProps } from "antd/lib/skeleton/Title";

export interface JMSkeletonAvatarProps extends SkeletonAvatarProps {}

export interface JMSkeletonParagraphProps extends SkeletonParagraphProps {}

export interface JMSkeletonTitleProps extends SkeletonTitleProps {}

export interface JMSkeletonProps extends SkeletonProps {}

export default class JMSkeleton extends React.Component<JMSkeletonProps> {
  render() {
    return <Skeleton {...this.props}>{this.props.children}</Skeleton>;
  }
}
