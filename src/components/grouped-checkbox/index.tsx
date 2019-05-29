import React, { FC } from "react";
import { css, cx } from "emotion";
import { Checkbox } from "antd";

export interface IGroupedCheckboxItem {
  key: string;
  title: string;
  /** optional. if not defined, fallbacks to onItemChange */
  onChange?: (checked: boolean, key: string) => void;
}

let GroupedCheckbox: FC<{
  /** defaults to "All" */
  title?: string;
  items: IGroupedCheckboxItem[];
  checkedKeys: string[];
  className?: string;
  itemClassName?: string;
  /** changes of the whole group */
  onGroupChange: (checked: boolean, selectedkeys: string[]) => void;
  /** optional. if item.noChange is defined, this function will not be used */
  onItemChange?: (checked: boolean, key: string) => void;
}> = props => {
  let allChecked = props.items.length > 0 && props.items.every(item => props.checkedKeys.includes(item.key));

  return (
    <div className={cx(styleContainer, props.className)}>
      <Checkbox
        checked={allChecked}
        onChange={event => {
          let checked = event.target.checked;
          let keys = checked ? props.items.map(x => x.key) : [];
          props.onGroupChange(checked, keys);
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
                  let checked = event.target.checked;
                  if (item.onChange != null) {
                    item.onChange(event.target.checked, item.key);
                  } else if (props.onItemChange) {
                    props.onItemChange(checked, item.key);
                  } else {
                    console.error("Found no change handler!", item);
                  }
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
