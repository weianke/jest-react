import React from 'react';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: 0,
    };
  }

  tick = () => {
    const { counts } = this.state;
    this.setState({
      counts: counts + 1,
    });
  };

  componentDidMount() {
    // 定时器，可以修改1000为自己想要的时间，
    this.interval = setInterval(() => {
      if(this.state.counts === 7) {
        clearInterval(this.interval);
        return false;
      }
      this.tick()
    }, 3000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.state.timer);
    }
  }

  render() {
    return <div>Test {this.state.counts}</div>;
  }
}
export default Test;
