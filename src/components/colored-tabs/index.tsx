import React, { FC, useRef, MutableRefObject, useState } from "react";
import { css, cx } from "emotion";
import { column, row } from "@jimengio/shared-utils";
import ReactResizeDetector from "react-resize-detector";
import FaIcons, { IconName } from "@jimengio/fa-icons";
import FaIcon from "@jimengio/fa-icons";

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
  let [showLeft, setShowLeft] = useState(false);
  let [showRight, setShowRight] = useState(false);
  let scrollArea = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;

  let onResize = () => {
    let el: HTMLDivElement = scrollArea.current;
    let hasScroll = el.scrollWidth > el.clientWidth;
    if (hasScroll) {
      setShowLeft(el.scrollLeft === 0 ? false : true);
      setShowRight(el.scrollLeft + el.clientWidth >= el.scrollWidth ? false : true);
    } else {
      setShowLeft(false);
      setShowRight(false);
    }
  };

  /** slightly larger then half of a tab width */
  let offset = 60;

  let onScrollLeft = () => {
    let el: HTMLDivElement = scrollArea.current;
    let distance = el.clientWidth - offset;
    let ramaining = el.scrollLeft;
    el.scrollLeft -= distance;
    setShowLeft(ramaining > distance);
    setShowRight(true);
  };

  let onScrollRight = () => {
    let el: HTMLDivElement = scrollArea.current;
    let distance = el.clientWidth - offset;
    let remaining = el.scrollWidth - el.clientWidth - el.scrollLeft;
    el.scrollLeft += distance;
    setShowLeft(true);
    setShowRight(remaining > distance);
  };

  return (
    <div className={cx(styleContainer, props.className)}>
      <div className={cx(row, styleScroll)} ref={scrollArea}>
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
      <ReactResizeDetector handleWidth onResize={onResize} />

      {showLeft ? <FaIcon className={styleLeft} name={IconName.AngleLeft} onClick={onScrollLeft} /> : null}
      {showRight ? <FaIcon className={cx(styleLeft, styleRight)} name={IconName.AngleRight} onClick={onScrollRight} /> : null}
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
  position: relative;
  padding: 0 24px;
`;

let styleLeft = css`
  position: absolute;
  font-size: 28px;
  left: 4px;
  color: #ccc;
  bottom: 10px;
  cursor: pointer;
`;

let styleRight = css`
  right: 4px;
  left: auto;
`;

let styleScroll = css`
  max-width: 100%;
  overflow: hidden;
  scroll-behavior: smooth;
`;
