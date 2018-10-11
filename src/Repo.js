import React from 'react';

class Repo extends React.Component {
    constructor() {
        super();
        this.state = {
            status: '',
        };
        this.getPRStatus = this.getPRStatus.bind(this);
    };

    componentDidMount() {
        if (this.props.type === 'PullRequestEvent') {
            this.setPRStatus(this.props.prLink);
        }
    };

    getPRStatus(url) {
        return fetch(url);
    };

    setPRStatus(url) {
        this.getPRStatus(url)
            .then(res => res.json())
            .then(data => this.setState({ status: data.state }))
    };

    render() {
        const { type, name, link } = this.props;
        return (
            <li className="event-item">
                <div className="event-type">{type} {this.state.status}</div>
                <div className="event-repo-name">{name}</div>
                <div className="event-repo-link"><a href={link}>Repo link</a></div>
            </li> 
        )
    }
};

export default Repo; 