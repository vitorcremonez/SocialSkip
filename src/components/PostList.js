import React, {Component} from 'react';
import {
    FlatList,
    View,
    ActivityIndicator,
    Button,
    RefreshControl,
    TouchableOpacity,
    ImageBackground,
    Text,
} from 'react-native';
import Post from '../components/Post';
import Spacer from './common/Spacer';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetchingPrevPosts: false,
            isFetchingNextPosts: false,
        };
    }

    renderHeaderComponent() {
        if (this.props.ListHeaderComponent) {
            return (
                <View>
                    {this.props.ListHeaderComponent()}
                    <Text>header flatlist</Text>
                </View>
            );
        }
    }

    renderFooterComponent() {
        if (this.props.ListFooterComponent) {
            return (
                <View>
                    <Text>footer flatlist</Text>
                    {this.props.ListFooterComponent()}
                </View>
            );
        }
    };

    _renderItemPost = ({item}) => {
        return (
            <Post
                post={item}
                navigation={this.props.navigation}
            />
        );
    };
    _keyExtractor = (item, index) => {
        return item.toString();
    };
    _itemSeparatorComponent = () => {
        return <Spacer/>;
    };

    render() {
        return (
            <FlatList
                inverted={false}
                data={this.props.posts}
                renderItem={this._renderItemPost}
                keyExtractor={this._keyExtractor}
                removeClippedSubviews={true}
                ItemSeparatorComponent={this._itemSeparatorComponent}
                ListHeaderComponent={this.renderHeaderComponent()}
                ListFooterComponent={this.renderFooterComponent()}
                initialNumToRender={5}
                onEndReachedThreshold={2}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isFetchingPrevPosts}
                        onRefresh={() => this.setState({isFetchingPrevPosts: false})}
                    />
                }
            />
        );
    }
}

export default PostList;