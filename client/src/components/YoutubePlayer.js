import React, { Component } from 'react';
import YouTube from 'react-youtube';

let videoList=[];
let i=0;


class YoutubePlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.videoId = null;
    }

    sortByVote(){
        videoList.sort(function(a, b) {
            return parseInt(b.vote,10) - parseInt(a.vote,10);
        });
    }

    componentDidMount() {
        videoList=this.props.videoList
        this.sortByVote();
        this.setState({ videoId: videoList[i].video });
    }

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        return (
            <YouTube
                videoId={this.state.videoId}
                opts={opts}
                onReady={this._onReady}
                onEnd={this._onEnd}
            />
        );
    }

    _onEnd = (event) => {
        if(i===videoList.length-1){
            i=-1;
        }
        this.setState({ videoId: videoList[++i].video });
        event.target.playVideo();
    }

}
export default YoutubePlayer;