import React from "react";
import Button, { ButtonProps } from "antd/lib/button";
import { css, cx } from "emotion";
import { ColorOperateStatus } from "@styles/colors";
import { borderRadius0 } from "@styles/index";

export {
  ButtonProps,
  ButtonSize,
  ButtonType,
  ButtonShape,
  ButtonGroupProps
} from "antd/lib/button";

export default class JimuButton extends React.Component<ButtonProps, any> {
  render() {
    let btnClassName;
    switch (this.props.type) {
    }

    return (
      <Button
        {...this.props}
        className={cx(borderRadius0, styleBtnContainer, this.props.className)}
      >
        {this.props.children}
      </Button>
    );
  }
}

const primaryBtn = css`
  background-color: ${ColorOperateStatus.enabled};
`;

const warningBtn = css`
  background-color: ${ColorOperateStatus.warning};
`;

const errorBtn = css`
  background-color: ${ColorOperateStatus.error};
`;

const styleBtnContainer = css`
  &:hover {
    opacity: 0.7;
    filter: alpha(70);
  }

  &:visited {
    .${primaryBtn} {
      background-color: #127cde;
    }

    .${errorBtn} {
      background-color: #d8203e;
    }
  }
`;
