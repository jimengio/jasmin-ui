import { css, cx } from "emotion";
import { ColorBorder } from "./colors";

export const borderTop = css`
  border-top: solid 1px ${ColorBorder.default};
`;

export const borderBottom = css`
  border-bottom: solid 1px ${ColorBorder.default};
`;

export const borderRight = css`
  border-right: solid 1px ${ColorBorder.default};
`;

export const borderLeft = css`
  border-left: solid 1px ${ColorBorder.default};
`;

export const border = css`
  border: solid 1px ${ColorBorder.default};
`;
