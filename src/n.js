import React from 'react';
import './App.css';

class N extends React.Component {
    constructor() {
        super()
        this.state = {
            date: new Date()
        } 
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
      tick() {
        this.setState({
          date: new Date()
        });
      }
    render() {
        return (
            <div className="App">
                <h1>It is {this.state.date.toLocaleTimeString()}</h1>
            </div>
        );
    }
}
export default N;

