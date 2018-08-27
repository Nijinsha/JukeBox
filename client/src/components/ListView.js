import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import ListSegment from './ListSegment';
let videoList=[];
let abc=[{title:"kaka"},{title:"poocjha"},{title:"eli"}];
let i=0;
class YoutubePlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    sortByVote(){
        videoList.sort(function(a, b) {
            return parseInt(b.vote) - parseInt(a.vote);
        });
    }
    componentWillMount() {
        
        videoList=this.props.videoList
        this.sortByVote();
    }

    render() {
        return (
            <List>
            {videoList.map((video, key) => {
                return (
                 <ListSegment video={video} />
                );
                console.log(video)
             })}
             </List>
        );
    }

   

}
export default YoutubePlayer;