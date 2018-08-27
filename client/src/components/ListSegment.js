import React, { Component } from 'react';
import { Segment, Grid, Button, Image } from 'semantic-ui-react';
import axios from 'axios';


class ListSegment extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            video: null
        };
        this.onVote = this.onVote.bind(this);
    }

    ComponentWillMount() {
        this.setState({ video: this.props.video });
    }

    onVote(id) {
        let vote_url = `http://localhost:8000/api/v1/vote/` + this.props.video.id + '/';
        axios.get(vote_url)
            .then(res => {
                this.props.video.vote += 1;
                this.setState({ video: this.props.video })
            });
    }

    render() {
        return (
            <Segment>
                <Grid>
                    <Grid.Column width={2} >
                        <Image src={this.props.video.thumb_url} size='small' />
                    </Grid.Column>
                    <Grid.Column width={10} >
                        {this.props.video.title.substring(0, 50)}
                    </Grid.Column>
                    <Grid.Column width={1} >
                        {this.props.video.vote}
                    </Grid.Column>
                    <Grid.Column width={3} >
                        <Button onClick={this.onVote.bind(this, this.props.video)}>Vote</Button>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}

export default ListSegment;
