import React, { Component } from 'react';
import { connect } from 'react-redux';

class AuthorName extends Component {
    render() {
        // we removed the componentDidUpdate because we no longer want this component to manually call fetchUser
        const author = this.props.users.find(user => {
            return user.id === this.props.userId;
        });
        
        if( ! author ) {
            return null;
        }
        
        return (
            <div className="header">
                { author.name }
            </div>
        );
    };
};
const mapStateToProps = (state) => {
    return { users: state.users };
};
// we no longer need fetchUser
export default connect(mapStateToProps)(AuthorName);
// export default AuthorName;

