import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Loading from './components/Loading';
import VideoPlayer from './components/VideoPlayer';
import Configure from './components/Configure';

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
        this.setState({ configurationAvailable: res.data.available });
        this.setState({ isLoading: false });
      });

  }

  render() {
    return(
      this.state.isLoading?<Loading/>:
      (this.state.configurationAvailable?<VideoPlayer/>:<Configure/>)
    );  
  }
}

export default App;
