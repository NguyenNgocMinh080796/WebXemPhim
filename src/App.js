import { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Spin } from 'antd';

const HomePage = lazy(() => import('./page/HomePage'));

function App() {
  return (
    <Suspense
      fallback={
        <div style={{ paddingTop: 300 }}>
          <Spin tip="Loading..." size="large" >
            <div className="content" />
          </Spin>
        </div>
      }
    >
      <BrowserRouter >
        <HomePage />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
