import React from "react";
import { css, cx } from "emotion";

import { ColorBorder, ColorOperateStatus } from "@styles/colors";

import Icon from "antd/lib/icon";

interface IProps {
  title?: React.ReactNode;
}

interface IState {
  isExpand: boolean;
}

export default class ExampleSection extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isExpand: true,
    };
  }

  render() {
    const { title } = this.props;

    return (
      <div className={styleContainer}>
        {title && (
          <div className={styleHeader}>
            <div>{title}</div>
            <span className={styleExpandBtn} onClick={this.onExpandClick}>
              <Icon type={!this.state.isExpand ? "up-circle" : "down-circle"} />
            </span>
          </div>
        )}
        <div className={cx(styleContent, !this.state.isExpand && styleMinHeight)}>
          <div className={stylePadding}>{this.props.children}</div>
        </div>
      </div>
    );
  }

  onExpandClick = () => {
    this.setState({ isExpand: !this.state.isExpand });
  };
}

const styleContainer = css`
  border: 1px solid ${ColorBorder.default};

  &:hover {
    border-color: ${ColorBorder.primary};
  }
`;

const styleHeader = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${ColorBorder.default};
`;

const styleExpandBtn = css`
  color: ${ColorOperateStatus.enabled};
  font-size: 24px;
  cursor: pointer;
`;

const styleContent = css`
  max-height: 360px;
  overflow: auto;

  /* 过渡效果 */
  transition: max-height 0.5s;
`;

const styleMinHeight = css`
  max-height: 0;
  overflow: hidden;
`;

const stylePadding = css`
  padding: 16px;
`;
