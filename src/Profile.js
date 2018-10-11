import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from "./repoReducer";
import ReposList from './ReposList';
import Button from './Button';

const Profile = ({ events, username, dispatchLogoutUser }) => {
    return (
        <div className="profile">
            <h2>
            Here are {username}'s latest events:
            </h2>
            <form onSubmit={(e) => { e.preventDefault(); dispatchLogoutUser() }}>
                <Button value="Click here to logout" />
            </form>
            <div>
            <img src={events[0].actor.avatar_url} alt={`${username}`} />
            </div>
            <ReposList />
        </div>
    )
}

const mapStateToProps = state => ({
    events: state.events,
    username: state.username
});

const mapDispatchToProps = dispatch => ({
    dispatchLogoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);