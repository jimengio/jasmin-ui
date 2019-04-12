import React from "react";

import Affix, { AffixProps } from "antd/lib/affix";

export interface JMAffixProps extends AffixProps {}

export default class JMAffix extends React.Component<JMAffixProps> {
  render() {
    const { children, ...others } = this.props;

    return <Affix {...others}>{children}</Affix>;
  }
}
