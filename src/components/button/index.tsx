import React, { CSSProperties, MouseEvent } from "react";
import PropTypes from "prop-types";

import Button from "antd/lib/button";
import { css, cx } from "emotion";

export { ButtonGroupProps } from "antd/lib/button";

//TODO: 目前 jimu 样式中 button size是统一的，暂不考虑 size 的设置
// export type JimuButtonSize = "default" | "small" | "large";

export type JimuButtonType = "primary" | "danger" | "default";

export type JimuButtonShape = "circle" | "round";

export type JimuButtonHtmlType = "button" | "submit" | "reset";

export interface JimuButtonProps {
  className?: string;
  // size?: JimuButtonSize;
  htmlType?: JimuButtonHtmlType;
  type?: JimuButtonType;
  shape?: JimuButtonShape;
  style?: CSSProperties;
  disabled?: boolean;
  ghost?: boolean;
  loading?: boolean;
  block?: boolean;
  onClick?: (event: MouseEvent) => void;
}

export default class JimuButton extends React.Component<JimuButtonProps> {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { className, children, ...others } = this.props;

    return (
      <Button className={className} {...others}>
        {children}
      </Button>
    );
  }
}

// const styleBtnContainer = css`
//   padding: 6px 24px;
//   text-align: center;
//   font-size: 14px;
// `;
