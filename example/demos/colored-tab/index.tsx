import React, { FC, useState } from "react";
import { css } from "emotion";
import ColoredTabs, { IColoredTab } from "@components/colored-tabs";

let tabs: IColoredTab[] = [
  { value: "factory", display: "工厂" },
  { value: "material", display: "物料" },
  { value: "analysis", display: "分析结果" },
  { value: "process", display: "制程" },
];

let DemoColoredTab: FC<{}> = props => {
  let [tab, setTab] = useState<string>(null as any);

  return (
    <div className={styleContainer}>
      <ColoredTabs value={tab} tabs={tabs} onChange={setTab} />

      <div className={styleDarkArea}>
        <ColoredTabs
          value={tab}
          tabs={tabs}
          onChange={setTab}
          tabClassName={styleTab}
          activeTabClassName={styleActiveTab}
          highlightClassName={styleTabHighlight}
        />
      </div>
    </div>
  );
};

export default DemoColoredTab;

let styleContainer = css``;

let styleDarkArea = css`
  margin-top: 100px;
  background-color: hsl(209, 100%, 55%);
  padding: 16px;
`;

let styleTab = css`
  color: white;

  &:hover {
    color: white;
  }
`;

let styleActiveTab = css`
  color: white;
  font-weight: bold;
`;

let styleTabHighlight = css`
  background-color: white;
`;
