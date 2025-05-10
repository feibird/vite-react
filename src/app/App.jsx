import { useState } from 'react'
import {ConfigProvider } from 'antd';
import {Route, useRoutes,} from "react-router";
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import './App.less'
import Content from "../component/lyout/content.jsx";

function App() {

  return (
      <ConfigProvider locale={zhCN}>
          <Content/>
      </ConfigProvider>
  )
}

export default App
