// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React, { useState, useEffect, useRef } from 'react';
import { useOutlet, history } from 'dumi';
import { warning } from '/Users/huabuyu/Documents/pnpm-monorepo/node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1/node_modules/rc-util';
import { SiteContext, type ISiteContext } from '/Users/huabuyu/Documents/pnpm-monorepo/node_modules/.pnpm/dumi@2.4.13_@babel+core@7.26.0_@types+node@22.9.0_eslint@8.57.1_prettier@3.3.3_react-dom@18.3_uxlodu3ueg225w2obupv5nd4jy/node_modules/dumi/dist/client/theme-api/context.js';
import { components } from '../meta/atoms';
import { locales } from '../locales/config';



const entryExports = {
};

// Static content
const pkg = {"name":"pnpm-monorepo","description":"","version":"1.0.0","license":"ISC","author":""};
const historyType = "browser";
const hostname = undefined;
const themeConfig = {"title":"smarty skeleton","footer":"Copyright © 2022-2022 Perfect Design. All Rights Reserved. Perfect Design 版权所有. 苏ICP备2022018069号","prefersColor":{"default":"light","switch":true},"nprogress":true,"lastUpdated":true,"name":"smarty skeleton","carrier":"dumi","hd":true,"rtl":true,"nav":[{"title":"指南123","link":"/guide"},{"title":"loading","link":"/loading"},{"title":"组件123","link":"/components/page1"}]};
const _2_level_nav_available = false;

export default function DumiContextWrapper() {
  const outlet = useOutlet();
  const [loading, setLoading] = useState(false);
  const prev = useRef(history.location.pathname);

  useEffect(() => {
    return history.listen((next) => {
      if (next.location.pathname !== prev.current) {
        prev.current = next.location.pathname;

        // scroll to top when route changed
        document.documentElement.scrollTo(0, 0);
      }
    });
  }, []);

  const context: ISiteContext = React.useMemo(() => {
    const ctx = {
      pkg,
      historyType,
      entryExports,
      demos: null,
      components,
      locales,
      loading,
      setLoading,
      hostname,
      themeConfig,
      _2_level_nav_available,
    };

    // Proxy do not warning since `Object.keys` will get nothing to loop
    Object.defineProperty(ctx, 'demos', {
      get: () => {
        warning(false, '`demos` return empty in latest version, please use `useDemo` instead.');
        return {};
      },
    });

    return ctx;
  }, [
    pkg,
    historyType,
    entryExports,
    components,
    locales,
    loading,
    setLoading,
    hostname,
    themeConfig,
    _2_level_nav_available,
  ]);

  return (
    <SiteContext.Provider value={context}>
      {outlet}
    </SiteContext.Provider>
  );
}
