import React, {PureComponent} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import Card from './common/Card';

class Post extends PureComponent {

    renderHeader() {
        const OpenedImageProfile = () => (
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('ProfileScreen')}}>
                <Text>IMG Profile</Text>
            </TouchableOpacity>
        );

        const OpenedName = () => (
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('ProfileScreen')}}>
                <Text style={styles.nameLink}>
                    { 'Vitor Cremonez' }
                </Text>
            </TouchableOpacity>
        );

        return (
            <View style={{flexDirection: 'row', paddingBottom: 5}}>
                <View style={{paddingRight:5}}>
                    <OpenedImageProfile/>
                </View>

                <View style={{flex:1, flexDirection: 'column', justifyContent: 'space-around'}}>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <OpenedName/>
                        </View>
                        <View style={{justifyContent:'center', marginLeft:5}}>
                            <Text style={styles.timestamp}>
                                time ago...
                            </Text>
                        </View>
                    </View>

                </View>

                <View>
                    <TouchableOpacity onPress={() => alert('Info!')} style={{padding:5, borderRadius:3, backgroundColor:'rgba(0,0,0,0.05)'}}>
                        <Text>:</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    render() {
        return (
            <Card>
                { this.renderHeader() }

            </Card>
        );
    }
}

const styles = {
    nameLink: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    groupLink: {
        fontSize: 12,
        color: '#999',
    },
    timestamp: {
        fontSize: 12,
        color: '#AAA',
    },
    menuButton: {
        flex: 1,
        padding:5,
        justifyContent: 'center'
    },
    menuButtonText: {
        textAlign:'center',
        color: '#999',
        fontSize: 15,
        fontWeight:'bold',
    }
};

export default Post;