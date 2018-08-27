import React, { Component } from 'react';
import { Loader, Dimmer } from 'semantic-ui-react';


class Loading extends Component {
    render() {
        return (
            <Dimmer active>
                <Loader />
            </Dimmer>
        );
    }
}

export default Loading;
