import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    ScrollView,
    StatusBar,
} from 'react-native';
import Post from "../Post";

class GroupScreen extends Component {
    static navigationOptions = {
        headerTitle: 'SocialSkip',
    };

    render() {
        return (
            <ScrollView>
                <StatusBar barStyle="light-content"/>

                <Post navigation={this.props.navigation}/>
                <Post navigation={this.props.navigation}/>
                <Post navigation={this.props.navigation}/>
                <Post navigation={this.props.navigation}/>
            </ScrollView>
        );
    }
}

export default GroupScreen;