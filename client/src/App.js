import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      configurationAvailable: false
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/api/v1/config-available/`)
      .then(res => {
        console.log(res.data);
        this.setState({ configurationAvailable: res.data.available });
        this.setState({ isLoading: false });
      });

  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
