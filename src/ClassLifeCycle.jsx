import React, { Component } from 'react';

class ClassLifeCycle extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: 'Jordan Belfort'
    }
  }
  componentWillMount(){
    console.log('First this called');
  }

  getData(){
    setTimeout(() => {
      console.log('Our data is fetched');
      this.setState({
        data: 'Hello WallStreet'
      })
    }, 1000)
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    return(
      <div>
      {this.state.data}
    </div>
    )
  }
}

export default ClassLifeCycle;

// Order of the class lifecycle methods
/*
1. set the initial state in the constructor
2. componentWillMount() [lagacy-should not use in code]
3. render()
4. componentDidMount()
5. setState()
6. render()
*/

//  you can not define setState() inside render() function. Why???
/*
Because setState() function changes the state of the application and causing a change in the state called the render() function again. 
So if you write something like this then calling the function stack will go for infinity and application gets the crash.
*/