import React, { FC, useState } from "react";
import { css, cx } from "emotion";
import ColoredTabs, { IColoredTab } from "@components/colored-tabs";

let tabs: IColoredTab[] = [
  { value: "factory", title: "工厂" },
  { value: "material", title: "物料" },
  { value: "analysis", title: "分析结果" },
  { value: "process", title: "制程" },
  { value: "carpet", title: "地毯图" },
  { value: "histgram", title: "直方图" },
  { value: "tech", title: "工艺" },
  { value: "part", title: "零件" },
];

let DemoColoredTab: FC<{}> = props => {
  let [tab, setTab] = useState<string>(null as any);

  return (
    <div>
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
