import React from 'react';
import Test from './test'

function App() {
  return (
    // data-test 给单元测试使用的属性
    <div className="app-container" title="dell lee" data-test="container">
      Hello world
      <Test></Test>  
    </div>
  );
}

export default App;
