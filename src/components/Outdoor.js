import React, {Component} from 'react';
import {
    View,
    Text,
    ImageBackground,
} from 'react-native';

class Outdoor extends Component {
    renderOnlineCounter() {
        return (
            <Text style={styles.onlinesGroup}>
                54 online
            </Text>
        );
    }

    render() {
        return (
            <ImageBackground source={{uri: 'https://www.skipthedishes.com/static/skip_refresh/img/home/landing_restaurants.jpg?_v2018062300333042'}} style={styles.backgroundImage}>
                {this.renderOnlineCounter()}

                <View style={{padding:50}}/>

                <Text style={styles.nameGroup}>
                    SkipTheDishes
                </Text>
            </ImageBackground>
        );
    }
}

const styles = {
    backgroundImage: {
        width: null,
        padding: 5,
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
    iconGroup: {
        color: 'white',
        fontSize: 100,

        textShadowColor: 'rgba(0,0,0,0.8)',
        textShadowOffset: {width: 0, height: 2.5},
        textShadowRadius: 5,
    },
    onlinesGroup: {
        fontWeight: 'bold',
        fontSize: 50,
        color: 'white',

        textShadowColor: 'rgba(0,0,0,0.8)',
        textShadowOffset: {width: 0, height: 2.5},
        textShadowRadius: 5,
    },
    nameGroup: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,

        textShadowColor: 'rgba(0,0,0,0.8)',
        textShadowOffset: {width: 0, height: 2.5},
        textShadowRadius: 5,
    },
};

export default Outdoor;