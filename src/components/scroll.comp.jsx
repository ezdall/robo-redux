import React from 'react';

export default function Scroll({ children }) {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '1px solid black',
        height: `calc(100vh - 195px)`
      }}
    >
      {children}
    </div>
  );
}
