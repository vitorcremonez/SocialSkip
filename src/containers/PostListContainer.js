import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PostList from '../components/PostList';
import {
    fetchPrevPosts,
    fetchNextPosts,
} from '../actions/PostActions';

class PostListContainer extends React.PureComponent {
    render() {
        return (
            <PostList
                {...this.props}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.postLists,
    };
}

PostListContainer.propTypes = {
    navigation: PropTypes.object,
    objectModel: PropTypes.string,
    objectId: PropTypes.number,
    type: PropTypes.string, // posts or photos
    ListHeaderComponent: PropTypes.func,
    ListFooterComponent: PropTypes.func,
    postCreatorTitle: PropTypes.string,
};

PostListContainer.defaultProps = {
    ListHeaderComponent: null,
    ListFooterComponent: null,
    type: 'posts',
    postCreatorTitle: '',
};

export default connect(mapStateToProps, {fetchPrevPosts, fetchNextPosts})(PostListContainer);

