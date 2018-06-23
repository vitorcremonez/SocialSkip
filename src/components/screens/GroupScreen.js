import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    Image,
    ScrollView,
    StatusBar,
} from 'react-native';
import Post from "../Post";
import Logo from '../../assets/images/logo-white.png';

class GroupScreen extends Component {
    static navigationOptions = {
        headerTitle: (
            <Image
                source={Logo}
                style={{width: 150, height: 24}}
                resizeMode={Image.resizeMode.contain}
            />
        ),
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