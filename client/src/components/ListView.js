import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

import ListSegment from './ListSegment';

let videoList=[];


class YoutubePlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    sortByVote(){
        videoList.sort(function(a, b) {
            return parseInt(b.vote,10) - parseInt(a.vote,10);
        });
    }
    componentWillMount() {
        videoList = this.props.videoList;
        this.sortByVote();
    }

    render() {
        return (
            <List>
            {videoList.map((video, key) => {
                return (
                 <ListSegment key={key} video={video} />
                );
             })};
             </List>
        );
    }

   

}
export default YoutubePlayer;