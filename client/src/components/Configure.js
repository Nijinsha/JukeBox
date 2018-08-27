import React, { Component } from 'react';
import {  Button, Form, Container, Header } from 'semantic-ui-react';
import axios from 'axios';

import VideoPlayer from './VideoPlayer';


class Configure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            channel: '',
            success:false
        };
        this.handleChangeOfChannel = this.handleChangeOfChannel.bind(this);
        this.handleChangeOfToken = this.handleChangeOfToken.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChangeOfChannel(e) {
        this.setState({ channel: e.target.value });

    }

    handleChangeOfToken(e) {
        this.setState({ token: e.target.value });

    }

    handleClick(e) {
        axios.post('http://localhost:8000/api/v1/slack_config/', {
            token: this.state.token,
            channel_id: this.state.channel
        }).then(res => {
            console.log(res.data.success)
            this.setState({success:res.data.success})
          });
    }



    render() {
        if(this.state.success){
        return(<VideoPlayer/>);     
        }else{
        return (
 
            <Container text>
                <Header as='h2'>Configure Slack</Header>
                <Form>
                    <Form.Field>
                        <label>Token</label>
                        <input placeholder='Token' onChange={this.handleChangeOfToken} />
                    </Form.Field>
                    <Form.Field>
                        <label>Channel ID</label>
                        <input placeholder='Channel ID' onChange={this.handleChangeOfChannel} />
                    </Form.Field>
                    <Button type='submit' onClick={()=>this.handleClick(this)} >Submit</Button>
                </Form>
            </Container>
        );
    }
    }


}

export default Configure;
