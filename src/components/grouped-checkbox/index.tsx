import React, { FC } from "react";
import { css, cx } from "emotion";
import { Checkbox } from "antd";

export interface IGroupedCheckboxItem {
  key: string;
  title: string;
  onChange: (checked: boolean, key: string) => void;
}

let GroupedCheckbox: FC<{
  title?: string;
  items: IGroupedCheckboxItem[];
  checkedKeys: string[];
  className?: string;
  itemClassName?: string;
  onChange: (checked: boolean, selectedkeys: string[]) => void;
}> = props => {
  let allChecked = props.items.length > 0 && props.items.every(item => props.checkedKeys.includes(item.key));

  return (
    <div className={cx(styleContainer, props.className)}>
      <Checkbox
        checked={allChecked}
        onChange={event => {
          let checked = event.target.checked;
          let keys = checked ? props.items.map(x => x.key) : [];
          props.onChange(checked, keys);
        }}
      >
        {props.title || "All"}
      </Checkbox>
      <div className={styleList}>
        {props.items.map(item => {
          return (
            <div key={item.key} className={props.itemClassName}>
              <Checkbox
                checked={props.checkedKeys.includes(item.key)}
                onChange={event => {
                  item.onChange(event.target.checked, item.key);
                }}
              >
                {item.title}
              </Checkbox>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GroupedCheckbox;

let styleContainer = css`
  line-height: 38px;
`;

let styleList = css`
  margin-left: 24px;
`;
