import React, { Component } from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import config from '../../config/index.js';


class ProgressBar extends Component {

    static propTypes = {
        contractId: PropTypes.number,
        style: PropTypes.object,
    }

  
    render() {
        const user = config.user1[0]
        const dataComplete = user.contracts[this.props.contractId].dataComplete
        
        return (
            <div className="progress-bar-container">
                <div className="progress-bar-wrapper">
                    <div className="progress-bar" style={{width:`${dataComplete}%`}}></div>
                </div>
                <div className="progress-bar-text">
                    <h3>{dataComplete}%</h3>
                    <p>de vos données <br/>saisies & transmises</p>
                </div>
            </div>
        );
    }
}

export default ProgressBar;
