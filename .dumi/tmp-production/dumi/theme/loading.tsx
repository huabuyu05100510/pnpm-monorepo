// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import nprogress from '/Users/huabuyu/Documents/pnpm-monorepo/node_modules/.pnpm/nprogress@0.2.0/node_modules/nprogress';
import './nprogress.css';
import UserLoading from '/Users/huabuyu/Documents/pnpm-monorepo/node_modules/.pnpm/dumi@2.4.13_@babel+core@7.26.0_@types+node@22.9.0_eslint@8.57.1_prettier@3.3.3_react-dom@18.3_uxlodu3ueg225w2obupv5nd4jy/node_modules/dumi/dist/client/pages/Loading';
import React, { useLayoutEffect, type FC } from 'react';
import { useSiteData } from 'dumi';

const DumiLoading: FC = () => {
  const { setLoading } = useSiteData();

  useLayoutEffect(() => {
    setLoading(true);
    nprogress.start();

    return () => {
      setLoading(false);
      nprogress.done();
    }
  }, []);

  return <UserLoading />
}

export default DumiLoading;
