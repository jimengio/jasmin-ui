import { css, cx } from "emotion";
import { ColorBackground, ColorOperateStatus } from "./colors";

/** basic size */
export const minHeight0 = css`
  min-height: 0;
`;

export const minWidth0 = css`
  min-width: 0;
`;

export const fullHeight = css`
  height: 100%;
`;

export const fullWidth = css`
  width: 100%;
`;

// display
export const displayFlex = css`
  display: flex;
`;
export const displayInlineFlex = css`
  display: inline-flex;
`;
export const displayBlock = css`
  display: block;
`;
export const displayInlineBlock = css`
  display: inline-block;
`;
export const displayNone = css`
  display: none;
`;

// clear link
export let clearLink = css`
  color: inherit;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;

// position
export const relative = css`
  position: relative;
`;

export const absoluteCenter = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

export const absoluteHorizontalCenter = css`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const absoluteVerticalCenter = css`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

// cursor
export const cursorPointer = css`
  cursor: pointer;
`;

export const cursorNotAllowed = css`
  cursor: not-allowed;
`;

//文本对齐方式
export const textAlignCenter = css`
  text-align: center;
`;

export const textAlignRight = css`
  text-align: right;
`;

// 文本显示方式
/** 超出文本以省略号显示 */
export const textEllipsis = css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
/** 超出文本强制换行 */
export const textBreakAll = css`
  word-break: break-all;
`;

export const selectedBGColor = css`
  background-color: ${ColorBackground.selected};
`;

export const noWrap = css`
  white-space: nowrap;
`;

export const enabledBtn = css`
  color: ${ColorOperateStatus.enabled};
  cursor: pointer;
`;

export const disabledBtn = css`
  color: ${ColorOperateStatus.disabled};
  cursor: not-allowed;
`;
