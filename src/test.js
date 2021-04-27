import React, { Component } from 'react';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      flag: true,
    };
  }

  getData = () => {
    this.setState({
      count: this.state.count + 1,
    });

    fetch('/').then(() => {
      // 接口返回为 true, 清除定时器加载页面。否则继续定时器，并发请求
      if (this.state.flag) {
        clearInterval(this.timer);
        // this.setState({
        //   count: 0,
        // });
      }
    });
  };

  test = (fn) => {
    fn();
    // alert('测试')
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.count === 7) {
        clearInterval(this.timer);
        // 提示弹框
        return;
      }
      this.getData();
    }, 3000);
  }

  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}

export default Test;
