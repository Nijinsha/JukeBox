import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import Header from './Header';
import ListView from './ListView';
import YoutubePlayer from './YoutubePlayer';


class PlayerArea extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Grid.Column width={16} >
                        <Header />
                    </Grid.Column>
                </Grid>
                <Grid divided>
                    <Grid.Column width={7} className="list-view">
                        <ListView videoList={this.state.videoList} />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <YoutubePlayer videoList={this.state.videoList} />
                    </Grid.Column>
                    <Grid.Column width={1}>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default PlayerArea;
