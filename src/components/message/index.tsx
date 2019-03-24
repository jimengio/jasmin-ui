import React from "react";

import message, { ConfigOptions, ArgsProps, MessageApi } from "antd/lib/message";

export interface JMMessageConfig extends ConfigOptions {}

export interface JMArgsPropsProps extends ArgsProps {}

let jmmessage: MessageApi = message;

export default jmmessage;
