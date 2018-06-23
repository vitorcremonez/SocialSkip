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
import PostListContainer from '../../containers/PostListContainer';

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
            <View>
                <StatusBar barStyle="light-content"/>

                <PostListContainer
                    navigation={this.props.navigation}
                />
            </View>
        );
    }
}

export default GroupScreen;