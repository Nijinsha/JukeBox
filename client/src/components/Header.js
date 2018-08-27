import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Menu>
                    <Menu.Item
                        name='jukebox'>
                        JukeBox
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}
export default Header;