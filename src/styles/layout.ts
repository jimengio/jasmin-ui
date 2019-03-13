import { css, cx } from "emotion";
import { scroll, xScroll, yScroll } from "./scroll";
import { minHeight0, minWidth0 } from "./basic";

// flexbox
export const row = css`
  display: flex;
  flex-direction: row;
`;

export const column = css`
  display: flex;
  flex-direction: column;
`;

export const flexWrap = css`
  flex-wrap: wrap;
`;

export const flexNoWrap = css`
  flex-wrap: nowrap;
`;

export const flex = css`
  flex: 1;
`;

export const noShrink = css`
  flex-shrink: 0;
`;

export const alignStart = css`
  align-items: flex-start;
`;

export const alignCenter = css`
  align-items: center;
`;

export const alignEnd = css`
  align-items: flex-end;
`;

export const alignStretch = css`
  align-items: stretch;
`;

export const justifyStart = css`
  justify-content: flex-start;
`;

export const justifyCenter = css`
  justify-content: center;
`;

export const justifyBetween = css`
  justify-content: space-between;
`;

export const justifyAround = css`
  justify-content: space-around;
`;

export const justifyEnd = css`
  justify-content: flex-end;
`;

/** 开始对齐 */
export const rowStart = cx(row, justifyStart);
export const columnStart = cx(column, justifyStart);

/** 末尾对齐 */
export const rowEnd = cx(row, justifyEnd);
export const columnEnd = cx(column, justifyEnd);

/** 等距对齐 */
export const rowAround = cx(row, justifyAround);
export const columnAround = cx(column, justifyAround);

/** 两端对齐 */
export const rowBetween = cx(row, justifyBetween);
export const columnBetween = cx(column, justifyBetween);

/** 垂直居中 */
export const rowMiddle = cx(row, alignCenter);
export const columnMiddle = cx(column, justifyCenter);

/** 水平居中 */
export const rowCenter = cx(row, justifyCenter);
export const columnCenter = cx(column, alignCenter);

/** 水平垂直都居中 */
export const rowContentCenter = cx(row, alignCenter, justifyCenter);
export const columnContentCenter = cx(column, alignCenter, justifyCenter);

/** 可滚动布局 */
export const flexScroll = cx(scroll, minHeight0, minWidth0);
export const flexYScroll = cx(yScroll, minHeight0);
export const flexXScroll = cx(xScroll, minWidth0);
