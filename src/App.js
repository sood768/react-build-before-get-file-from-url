import React, { Component } from 'react';
class App extends Component {
  state = {
    data: { value1: 'https://www.happywithwords.in/', value2: "ReactJs Test" }
  }
  render() {
    const { data } = this.state;

    return <ul>
      {
        Object.keys(data).map((value, index) => <li key={index}>{data[value]}</li>)
      }
    </ul>
  }
}
export default App;
