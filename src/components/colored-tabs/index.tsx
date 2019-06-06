import React, { FC } from "react";
import { css, cx } from "emotion";
import { column, row } from "@jimengio/shared-utils";

export interface IColoredTab {
  key?: string;
  value: string;
  title: string;
}

let ColoredTabs: FC<{
  tabs: IColoredTab[];
  value: string;
  onChange: (tab: string) => void;
  className?: string;
  tabClassName?: string;
  activeTabClassName?: string;
  highlightClassName?: string;
}> = props => {
  return (
    <div className={cx(row, styleContainer, props.className)}>
      {props.tabs.map((tab, idx) => {
        let isSelected = props.value === tab.value;

        return (
          <div
            key={tab.key || tab.value}
            className={cx(
              styleTab,
              idx === 0 ? styleFirstTab : null,
              props.tabClassName,
              isSelected ? styleCurrentTab : null,
              isSelected ? props.activeTabClassName : null
            )}
            onClick={event => {
              props.onChange(tab.value);
            }}
          >
            <span>{tab.title}</span>
            {isSelected ? <div className={cx(styleHighlight, props.highlightClassName)} /> : null}
          </div>
        );
      })}
    </div>
  );
};

export default ColoredTabs;

let defaultTheme = `hsl(209, 100%, 55%)`;

let styleTab = css`
  display: inline-block;
  position: relative;
  font-size: 14px;
  color: hsl(0, 0%, 65%);
  padding: 12px 16px;

  margin-left: 32px;
  cursor: pointer;

  &:hover {
    color: ${defaultTheme};
  }
`;

/** inline content does not scale, 1.14~=16/14 of font-size. Page should not be shaking */
let styleCurrentTab = css`
  color: ${defaultTheme};

  span:first-of-type {
    display: inline-block;
    transform: scale(1.14);
  }
`;

let styleFirstTab = css`
  margin-left: 0px;
`;

let styleHighlight = css`
  position: absolute;
  height: 2px;
  width: 100%;
  left: 0;
  bottom: 0;
  background-color: ${defaultTheme};
`;

let styleContainer = css`
  overflow: auto;
`;
