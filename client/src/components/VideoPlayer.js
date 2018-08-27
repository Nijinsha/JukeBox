import React, { Component } from 'react';


class VideoPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          videoList: [],
          isLoading: true,
          noConfiguration:true
        };
    
    
    }

    render() {
        return (
          <h1>Video Page</h1>
        );
    }
}

export default VideoPlayer;
