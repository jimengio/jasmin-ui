import React, { FC, useState } from "react";
import { css } from "emotion";
import GroupedCheckbox, { IGroupedCheckboxItem } from "@components/grouped-checkbox";
import produce from "immer";

let DemoGroupedCheckbox: FC<{}> = props => {
  let [checkedKeys, setCheckKeys] = useState<string[]>([]);

  let changeKey = (checked: boolean, x: string) => {
    if (checked) {
      if (!checkedKeys.includes(x)) {
        setCheckKeys(
          produce(checkedKeys, draft => {
            draft.push(x);
          })
        );
      }
    } else {
      if (checkedKeys.includes(x)) {
        setCheckKeys(checkedKeys.filter(y => y !== x));
      }
    }
  };

  let items: IGroupedCheckboxItem[] = [
    {
      key: "quality",
      title: "查看",
      onChange: changeKey,
    },
    {
      key: "manage",
      title: "管理",
      onChange: changeKey,
    },
    {
      key: "alerts",
      title: "报警",
      onChange: changeKey,
    },
  ];

  return (
    <div className={styleContainer}>
      Grouped Checkbox
      <GroupedCheckbox
        items={items}
        title={"所有权限"}
        onChange={(checked, selectedKeys) => {
          setCheckKeys(selectedKeys);
        }}
        checkedKeys={checkedKeys}
      />
    </div>
  );
};

export default DemoGroupedCheckbox;

let styleContainer = css``;
