import React, { Component } from 'react';
import axios from 'axios';

import PlayArea from './PlayArea';
import Loading from './Loading';


class VideoPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          videoList: [],
          isLoading: true
        };
    
    
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/api/v1/videos/`)
          .then(res => {
            const videoList = res.data;
            this.setState({ videoList: videoList });
            this.setState({ isLoading: false })
          });
      }

    render() {
        return (
          this.state.isLoading?<Loading/>:<PlayArea/>
        );
    }
}

export default VideoPlayer;
