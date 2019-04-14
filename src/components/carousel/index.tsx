import React from "react";

import Carousel, { CarouselProps } from "antd/lib/carousel";

export interface JMCarouselProps extends CarouselProps {}

export default class JMCarousel extends React.Component<JMCarouselProps> {
  render() {
    const { children, ...others } = this.props;
    return <Carousel {...others}>{children}</Carousel>;
  }
}
