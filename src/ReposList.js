import React from 'react';
import Repo from './Repo';

const ReposList = props => {
    return (
        <ul>
            {this.props.events
                .filter(event => event.type === 'PullRequestEvent' || event.type === 'ForkEvent')
                .map(event => <Repo 
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

export default ReposList;