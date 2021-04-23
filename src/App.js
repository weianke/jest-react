import React, {useState, useEffect} from 'react';
import Child from './child.js';
import Test from './tets';

function App(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('1122132');
  useEffect(()=>{
   
    const timer = setInterval(() => {
      if(count === 7) {
        clearInterval(timer);
        return;
      }
      
      // 请求逻辑
      setCount(count + 1);
    }, 3000);

   

    document.title = `${count}`;
    console.log(count)
    return () => clearInterval(timer);
  })

  const changeName = (name) => {
    console.log('返回的name', name);
    setName(name);
  }

  return (
    // data-test 给单元测试使用的属性
    <div className="app-container" title="dell lee" data-test="container">
      count 定时器后：{count}
      <Child name={name} age={count} editName={changeName}></Child>
      <div>
        <Test></Test>
      </div>
    </div>
  );
}

export default App;
