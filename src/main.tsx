import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css';
import './index.css'
import {RouterProvider} from 'react-router-dom';
import { router } from './router.tsx'
import {ConfigProvider} from 'antd';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
// Basically react query helps to manage server state. Jo bhi data from server aaraha hai through async req uss ka state yhe react-query maintain krta hai. We can use many cool things like caching k bar bar repeated requests naa krye, error-handling, load state, and so on.
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* Look ant hum ko ConfigProvider deta hai jis mein bhot custimzation krsaktye hain, abhi hum n orange color dala default orange color lyegaa      */}
      {/*DBG ka color code #009 hai */}
      <ConfigProvider theme={{token:{colorPrimary:'#F65F42', colorLink:'#F65F42'}}}>
        {/* To render router, React-router-dom provides RouterProvider, so we used it  */}
        <RouterProvider router={router} /> 
      </ConfigProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)