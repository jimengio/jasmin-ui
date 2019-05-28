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
    },
    {
      key: "manage",
      title: "管理",
    },
    {
      key: "alerts",
      title: "报警",
    },
  ];

  return (
    <div className={styleContainer}>
      Grouped Checkbox
      <GroupedCheckbox
        items={items}
        title={"所有权限"}
        checkedKeys={checkedKeys}
        onGroupChange={(checked, selectedKeys) => {
          setCheckKeys(selectedKeys);
        }}
        onItemChange={changeKey}
      />
    </div>
  );
};

export default DemoGroupedCheckbox;

let styleContainer = css``;
