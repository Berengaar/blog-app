import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthWrapper from './components/auth/AuthWrapper';
import ArticleCard from './components/article/card/ArticleCard';
import WriteWrapper from './components/article/write-editor/WriteWrapper';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      {/* <Route path='*' element={<App />} /> */}
      <Route path='' element={<App />} >
        <Route path='/article' element={<ArticleCard />} />
        <Route path='/writing' element={<WriteWrapper />} />
      </Route>
      <Route path='/auth' element={<AuthWrapper />} />
    </Routes>
  </BrowserRouter>
);
