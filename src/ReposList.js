import React from 'react';
import Repo from './Repo';
import { connect } from "react-redux";

const ReposList = ({ events }) => {
    return (
        <ul>
            {events
                .filter(event => event.type === 'PullRequestEvent' || event.type === 'ForkEvent')
                .map(event => 
                    <Repo 
                        key={event.id} 
                        type={event.type} 
                        name={event.repo.name} 
                        link={event.repo.url} 
                        prLink={event.payload.pull_request ? event.payload.pull_request.url : ''}
                    />
                )
            }
        </ul>
    );
} 

const mapStateToProps = state => ({
    events: state.events,
});

export default connect(mapStateToProps)(ReposList);