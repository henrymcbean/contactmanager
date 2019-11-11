import React, { Component } from 'react'

class Test extends Component {
  state = {
    test: 'test'
  };

  componentDidMount() {                     // Order of most often Used 1
    console.log('componentDidMount...');
  }

  UNSAFE_componentWillMount() {             // Order of most often Used 2 - Will be deprecated
    console.log('componentWillMount...');
  }

  // Did not work in this component since we don't update
  componentDidUpdate() {                    // Order of most often Used 3
    console.log('componentDidUpdate...');
  }

  componentWillUpdate() {                   // This will fire before above. - Will be deprecated
    console.log('componentWillUpdate...');
  }

  componentWillReceiveProps(nextProps, nextState) { // Order of most often Used 5 - Will be deprecated
    console.log('componentWillReceiveProps...');    // Used in Redux
  }

    // Replacing componentWillReceiveProps
  static getDerivedStateFromProps(nextProps, prevState) { // Order of most often Used 6
    return  {
      test: 'something'   // You cannot use setState have to return some part of the state.
    };
  }

  // New Life Cycle Methods
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate...');   
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    )
  }
}

export default  Test;