import React from 'react';
import { indexOf, binarySearch } from './DSA-searching';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.arr = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88,
      27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82,
      6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87,
      49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5,]
    this.state = {
      output: null,
      input: '',
    }
  }

  handleInput = (e) => {
    e.preventDefault();
    const input = e.target;
    this.setState({input: parseInt(input.value)})
  }

  clickL = (e) => {
    e.preventDefault();
    this.setState({output: indexOf(this.arr, this.state.input)});
    
  }

  clickB = (e) => {
    e.preventDefault();
    let newArr = [...this.arr]
    let sortArr = newArr.sort((a, b) => a - b)
    this.setState({output: binarySearch(sortArr, this.state.input)})
    
  }

  render() {

    return (
      <main className='App'>
        <form>

          <label htmlFor='lin'>Enter your value to search by</label>
          <input type='number' id='lin' name='input' onChange={this.handleInput} value={this.state.input}/><br />
          <button onClick={this.clickL}>Linear search</button>
          <button onClick={this.clickB}>Binary search</button>

        </form>
    <span id='return'>output: {this.state.output}</span>
      </main>
    );
  }
}
