import React from 'react';

const Loader = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div className="spinner" style={{ margin: '20px auto', width: '50px', height: '50px', border: '5px solid #ccc', borderTop: '5px solid red', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
      <p>Loading, please wait...</p>
    </div>
  );
};

export default Loader;

// Add spinner animation in CSS
// @keyframes spin {
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// }
