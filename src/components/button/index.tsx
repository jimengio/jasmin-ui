import React, { CSSProperties, MouseEvent } from "react";
import PropTypes from "prop-types";

import Button from "antd/lib/button";
import { css, cx } from "emotion";
import { ColorOperateStatus } from "@styles/colors";

export { ButtonGroupProps } from "antd/lib/button";

//TODO: 目前 jimu 样式中 button size是统一的，暂不考虑 size 的设置
// export type JimuButtonSize = "default" | "small" | "large";

export enum JimuButtonType {
  primary = "primary",
  danger = "danger",
}

export enum JimuButtonShape {
  circle = "circle",
  round = "round",
}

export enum JimuButtonHtmlType {
  button = "button",
  submit = "submit",
  reset = "reset",
}

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
    const { className, htmlType, type, shape, style, disabled, ghost, loading, block } = this.props;

    const buttonProps: JimuButtonProps = {
      htmlType,
      type,
      shape,
      style,
      disabled,
      ghost,
      loading,
      block,
    };

    let btnClassName;
    switch (type) {
      case JimuButtonType.primary:
        btnClassName = primaryBtn;
        break;
      case JimuButtonType.danger:
        btnClassName = errorBtn;
        break;
      default:
        btnClassName = primaryBtn;
        break;
    }

    return (
      <Button {...buttonProps} className={cx(styleBtnContainer, btnClassName, className)} onClick={this.props.onClick}>
        {this.props.children}
      </Button>
    );
  }
}

const primaryBtn = css`
  background-color: ${ColorOperateStatus.enabled};
  color: #ffffff;

  &:hover {
    opacity: 0.7;
    filter: alpha(70);
  }

  &:active {
    opacity: 1;
    filter: alpha(100);
    background-color: #127cde;
  }
`;

const errorBtn = css`
  background-color: ${ColorOperateStatus.error};
  color: #ffffff;

  &:hover {
    opacity: 0.7;
    filter: alpha(70);
  }

  &:active {
    opacity: 1;
    filter: alpha(100);
    background-color: #d8203e;
  }
`;

const styleBtnContainer = css`
  padding: 6px 24px;
  text-align: center;
  font-size: 14px;
  outline: none;
  cursor: pointer;
`;
