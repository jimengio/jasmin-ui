import React from "react";

import notification, {
  ConfigProps,
  ArgsProps,
  NotificationApi
} from "antd/lib/notification";

export interface NotificationConfig extends ConfigProps {}

export interface JMArgsPropsProps extends ArgsProps {}

let jmnotification: NotificationApi = notification;

export default jmnotification;
