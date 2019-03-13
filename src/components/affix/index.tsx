import React from "react";

import Affix, { AffixProps } from "antd/lib/affix";

export interface JMAffixProps extends AffixProps {}

export default class JMAffix extends React.Component<JMAffixProps> {
  render() {
    return <Affix {...this.props}>{this.props.children}</Affix>;
  }
}
