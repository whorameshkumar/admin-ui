import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css';
import './index.css'
import {RouterProvider} from 'react-router-dom';
import { router } from './router.tsx'
import {ConfigProvider} from 'antd';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Look ant hum ko ConfigProvider deta hai jis mein bhot custimzation krsaktye hain, abhi hum n orange color dala default orange color lyegaa      */}
    {/*DBG ka color code #009 hai */}
    <ConfigProvider theme={{token:{colorPrimary:'#F65F42', colorLink:'#F65F42'}}}>
      {/* To render router, React-router-dom provides RouterProvider, so we used it  */}
      <RouterProvider router={router} /> 
    </ConfigProvider>
  </React.StrictMode>,
)