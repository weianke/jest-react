import React, { } from 'react';

function Child(props) {
  // console.log('childProps', props)
  const { name, age } = props;
  const changeName = () => {
    props.editName('安可');
  };
  return (
    <div>
      <div onClick={() => changeName()}>姓名：{name}</div>
      <div>年龄： {age}</div>
    </div>
  );
}

export default Child;
