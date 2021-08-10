import React from 'react';

import './SampleLinkedIn.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';

function SampleLinkedIn() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        {/* App Body */}
        <Sidebar />
        {/* Feed */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default SampleLinkedIn;
