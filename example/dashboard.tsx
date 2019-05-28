import React from "react";
import { Switch, Route, Link, NavLink, Redirect } from "react-router-dom";
import { css, cx } from "emotion";

import Button from "./demos/button";
import Table from "./demos/table";
import DemoColoredTab from "./demos/colored-tab/index";
import DemoGroupedCheckbox from "./demos/grouped-checkbox";

const componentItems: {
  name: string;
  title: string;
  path: string;
  component: React.ReactNode;
}[] = [
  {
    name: "button",
    title: "Button",
    path: "button",
    component: <Button />,
  },
  {
    name: "table",
    title: "Table",
    path: "table",
    component: <Table />,
  },
  {
    name: "colored-tabs",
    title: "Colored Tabs",
    path: "colored-tabs",
    component: <DemoColoredTab />,
  },
  {
    name: "grouped-checkbox",
    title: "Grouped Checkbox",
    path: "grouped-checkbox",
    component: <DemoGroupedCheckbox />,
  },
];

interface IProps {
  match: any;
}

interface IState {}

export default class Dashborad extends React.Component<IProps, IState> {
  render() {
    const { match } = this.props;

    return (
      <div className={styleContainer}>
        <div className={styleSidebar}>
          {componentItems.map(item => {
            return (
              <div key={item.name}>
                <NavLink to={`${match.path}${item.path}`}>{item.title}</NavLink>
              </div>
            );
          })}
        </div>
        <div className={styleContent}>
          <Switch>
            {componentItems.map(item => {
              return <Route key={item.name} path={`${match.path}${item.path}`} render={() => item.component as any} />;
            })}
            <Redirect to={`${match.path}button`} />
          </Switch>
        </div>
      </div>
    );
  }
}

const styleContainer = css`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const styleSidebar = css`
  width: 300px;
  padding: 10px;
  border-right: 1px solid #bdbdbd;
  overflow: auto;
`;

const styleContent = css`
  flex: 1;
  min-width: 0;
  padding: 20px;
  overflow: auto;
`;
