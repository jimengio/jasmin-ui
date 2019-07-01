import React from "react";

import LocaleProvider from "antd/lib/locale-provider";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import en_US from "antd/lib/locale-provider/en_US";

export interface LocaleProviderProps {
  language: "zh_CN" | "en_US";
}

export default class JimuLocaleProvider extends React.Component<LocaleProviderProps> {
  render() {
    const { children, language, ...otherProps } = this.props;

    let locale = zh_CN;
    switch (language) {
      case "en_US":
        locale = en_US;
        break;
    }

    return (
      <LocaleProvider locale={locale} {...otherProps}>
        {children}
      </LocaleProvider>
    );
  }
}
