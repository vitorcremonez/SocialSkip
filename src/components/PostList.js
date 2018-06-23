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
import MeetUPaginator from '../services/MeetUPaginator';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetchingPrevPosts: false,
            isFetchingNextPosts: false,
        };
        this.paginator = new MeetUPaginator();
    }

    componentDidMount() {
        this.fetchNextPosts();
    }

    fetchNextPosts() {
        if (!this.state.isFetchingPrevPosts && !this.state.isFetchingNextPosts) {
            this.setState({isFetchingNextPosts: true});

            let data = {
                object_model: 'Groups',//this.props.objectModel,
                object_id: 1, //this.props.objectId,
            };

            this.props.fetchNextPosts(
                data,
                this.paginator.getNextPage(),
                (response) => {
                    this.paginator.refreshNextPage(response.data.pagination);
                    this.setState({isFetchingNextPosts: false});
                },
                (error) => {
                    alert('erro');
                    console.error('xxxxxxxx', error);
                    this.props.navigation.navigate('NetworkErrorModal');
                    this.setState({isFetchingNextPosts: false});
                }
            );
        }
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
                    {this.renderFetchButton()}
                    {this.props.ListFooterComponent()}
                </View>
            );
        } else {
            return (
                <View>
                    {this.renderFetchButton()}
                </View>
            );
        }
    };

    renderFetchButton() {
        if (this.state.isFetchingNextPosts) {
            return <ActivityIndicator size="large" style={{margin: 10}}/>;
        } else {
            return <Button onPress={() => this.fetchNextPosts()} title={"+ Posts"}/>;
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
        return item.id.toString();
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