import React from "react";
import Button from "@components/button";
import Notification from "@components/notification";
import Modal from "@components/modal";
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
          <Button type="primary" onClick={this.onClick}>
            Test
          </Button>
        </ExampleSection>
      </div>
    );
  }

  onClick = () => {
    Modal.confirm({
      content: "测试 Modal",
    });
    // message.success("test message");
    // Notification.success({
    //   message: "test notification",
    // });
  };
}
