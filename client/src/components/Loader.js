import React, { Component } from 'react';
import { Loader, Dimmer } from 'semantic-ui-react';


class Loader extends Component {
    render() {
        return (
            <Dimmer active>
                <Loader />
            </Dimmer>
        );
    }
}

export default Loader;
