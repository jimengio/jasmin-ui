import React from "react";
import Table from "@components/table";
const Column = Table.Column;
import { css, cx } from "emotion";
import { fullHeight } from "@styles/index";

import ExampleSection from "@example/components/ExampleSection";
const tableData = require("./mock-data.json");

interface IProps {}

export default class TableDemo extends React.Component<IProps> {
  render() {
    return (
      <div className={fullHeight}>
        <ExampleSection title="Basic Table">
          <Table dataSource={tableData.items} rowKey="id" size="middle" useFixedHeader pagination={false}>
            <Column title="名称" dataIndex="name" width={120} />
            <Column title="年龄" dataIndex="age" width={80} />
            <Column title="性别" dataIndex="gender" width={80} />
          </Table>
        </ExampleSection>
      </div>
    );
  }
}
