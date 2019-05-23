import React, { FC } from "react";
import { css, cx } from "emotion";

export interface IColoredTab {
  key?: string;
  value: string;
  display: string;
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
    <div className={cx(styleContainer, props.className)}>
      {props.tabs.map((tab, idx) => {
        let isSelected = props.value === tab.value;

        return (
          <div
            key={tab.key || tab.value}
            className={cx(
              styleTab,
              idx === 0 ? styleFirstTab : null,
              isSelected ? styleCurrentTab : null,
              props.tabClassName,
              isSelected ? props.activeTabClassName : null
            )}
            onClick={event => {
              props.onChange(tab.value);
            }}
          >
            {tab.display}
            {isSelected ? <div className={cx(styleHighlight, props.highlightClassName)} /> : null}
          </div>
        );
      })}
    </div>
  );
};

export default ColoredTabs;

let styleContainer = css``;

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

let styleCurrentTab = css`
  color: ${defaultTheme};
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
