import React, {PureComponent} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import Card from './common/Card';
import Attachments from "./Attachments";

class Post extends PureComponent {

    renderHeader() {
        const OpenedImageProfile = () => (
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('ProfileScreen')}}>
                <Image
                    source={{uri: 'https://specials-images.forbesimg.com/imageserve/5a8d90fd4bbe6f2652f61c15/416x416.jpg?background=000000&cropX1=0&cropX2=1999&cropY1=159&cropY2=2159'}}
                    resizeMode={Image.resizeMode.cover}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50/2,
                        backgroundColor: 'gray',
                    }}
                />
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

    renderBody() {
        return (
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('PostScreen', {post: this.props.post})}}>
                <Text style={{fontSize: 18}}>
                    { this.props.post.body }
                </Text>
            </TouchableOpacity>
        );
    }

    renderEmbed() {
        if (this.props.post.attachments && this.props.post.attachments.length > 0) {
            return (
                <Attachments attachments={this.props.post.attachments}/>
            );
        }
    }

    renderToolbar() {
        const LikeButton = () => (
            <View style={styles.menuButton}>
                <TouchableOpacity onPress={() => alert('like')}>
                    <Text style={styles.menuButtonText}>
                        Love
                    </Text>
                </TouchableOpacity>
            </View>
        );

        const CommentButton = () => (
            <View style={styles.menuButton}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileScreen')}>
                    <Text style={styles.menuButtonText}>
                        Comment
                    </Text>
                </TouchableOpacity>
            </View>
        );

        const ChatButton = () => (
            <View style={styles.menuButton}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileScreen')}>
                    <Text style={styles.menuButtonText}>
                        Private
                    </Text>
                </TouchableOpacity>
            </View>
        );

        return (
            <View style={{flexDirection: 'row', justifyContent:'center', paddingTop:5, paddingBottom:5}}>
                <LikeButton/>
                <CommentButton/>
                <ChatButton/>
            </View>
        );
    }

    render() {
        return (
            <Card>
                { this.renderHeader() }
                { this.renderBody() }
                { this.renderEmbed() }
                { this.renderToolbar() }
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