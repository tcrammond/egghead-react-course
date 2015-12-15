var React = require('react');

var UserProfile = React.createClass({
    render: function() {
        return (
            <p>Profile for {this.props.username}</p>
        );
    }
});

module.exports = UserProfile;