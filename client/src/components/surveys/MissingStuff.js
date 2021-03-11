import React from 'react';

export default (props) => {
    return (
        <div className="card darken-1">
            <div className="card-content">
                <span className="card-title">{props.title}</span>
            </div>
            <div className="card-action">
                <p>
                    {props.description}
                </p>
            </div>
        </div>
    );
}