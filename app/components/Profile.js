var React = require('react');
var ReactRouter = require('react-router');

var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes');

var Profile = React.createClass({

    // Set the initial state of the component, i.e. any state this is going to handle is initialized here
    // this.state
    getInitialState: function() {
      return {
          notes: [],
          repos: [],
          bio: {}
      };
    },

    render: function() {
        return (
          <div className="row">
              <div className="col-xs-4">
                  <UserProfile username={this.props.params.username} bio={this.state.bio} />
              </div>
              <div className="col-xs-4">
                  <Repos repos={this.state.repos} />

              </div>
              <div className="col-xs-4">
                  <Notes notes={this.state.notes} />

              </div>
          </div>
        );
    }

});

module.exports = Profile;