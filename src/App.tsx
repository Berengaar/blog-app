import React from 'react';
import ContentWrapper from './layout/content-bar/ContentWrapper';
import LeftSideBar from './layout/leftside-bar/LeftSideBar';
import RightSideBar from './layout/rightside-bar/RightSideBar';

function App() {
  return (
    <>
      <div className='flex'>
        <LeftSideBar />
        <ContentWrapper />
        <RightSideBar />
      </div>
    </>
  );
}

export default App;
