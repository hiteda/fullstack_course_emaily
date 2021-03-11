import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys, fetchUser } from '../../actions';
import MissingStuff from './MissingStuff';

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        if (this.props.auth && this.props.auth.credits === 0) {
            return <MissingStuff
                title="No Credits"
                description="You do not have any credits. Click the Add Credits button to buy more."
            />;
        }
        if (this.props.surveys === undefined || this.props.surveys.length === 0) {
            return <MissingStuff
                title="No Surveys"
                description="You have not created any survey campaigns. Click the red button in the bottom right to add a new survey."
            />;
        }
        else {
            return this.props.surveys.reverse().map(survey => {
                return (
                    <div className="card darken-1" key={survey._id}>
                        <div className="card-content">
                            <span className="card-title">{survey.title}</span>
                            <p>
                                {survey.body}
                            </p>
                            <p className="right">
                                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                            </p>
                        </div>
                        <div className="card-action">
                            <a>Yes: {survey.yes}</a>
                            <a>No: {survey.no}</a>
                        </div>
                    </div>
                );
            });
        }
    }

    render() {
        return (
            <div>
                {this.renderSurveys()}
            </div>
        );
    }
}

function mapStateToProps({ surveys, auth }) {
    return { surveys, auth };
}

export default connect(mapStateToProps, { fetchSurveys, fetchUser })(SurveyList);