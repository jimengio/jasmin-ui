import React from "react";
import Button from "@components/button";
import Notification from "@components/notification";
import { message } from "@components/index";
import { css, cx } from "emotion";
import { fullHeight } from "@styles/index";

import ExampleSection from "@example/components/ExampleSection";

interface IProps {}

export default class ButtonDemo extends React.Component<IProps> {
  render() {
    return (
      <div className={fullHeight}>
        <ExampleSection title="初始状态">
          <Button onClick={this.onClick}>Test</Button>
        </ExampleSection>
      </div>
    );
  }

  onClick = () => {
    message.success("test message");
    Notification.success({
      message: "test notification",
    });
  };
}
