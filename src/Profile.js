import React from 'react';
import ReposList from './ReposList';
import Button from './Button';

const Profile = props => {
    const { login, avatar, events, handleLogout } = props;
    return (
        <div className="profile">
            <h2>Here are {login}'s latest events:</h2>
            <Button handleClick={handleLogout} value="Click here to logout" />
            <div><img src={avatar} alt={`${login}`} /></div>
            <ReposList events={events}/>
        </div>
    )
}

export default Profile;