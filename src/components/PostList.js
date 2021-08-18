import React, { Component } from 'react';
import { connect } from 'react-redux';
// we are now only using fetchPostsAndUsers
import { fetchPostsAndAuthors } from '../actions';
import AuthorName from './AuthorName';
class PostList extends Component {
    componentDidMount() {
        // we replaced this.props.fetchPosts
        this.props.fetchPostsAndAuthors();
    }
    render() {
        const posts = this.props.posts.map(post => {
            return (
                <div className="ui container">
                    <div className="ui icon message" key="{post.id}">
                        <i className="large middle aligned icon user"></i>
                        <div className="content">
                            <div className="header">{post.title}</div>
                            <p>{post.body}</p>
                            <AuthorName userid={ post.userid } />
                        </div>
                    </div>
                </div>
            );
        })
        return (
            <div className="ui relaxed divided list">
                { posts }
            </div>
        );
    };
};
const mapStateToProps = (state) => {
    return { posts: state.posts };
};
// we replaced fetchPosts with fetchPostsAndAuthors
export default connect(mapStateToProps, {
    fetchPostsAndAuthors
})(PostList);