import React, { Component } from 'react';
import './index.scss';
import PropTypes from 'prop-types';

import { Icon } from 'antd';

class ActionPill extends Component {

    static propTypes = {
        type: PropTypes.string,
        style: PropTypes.object,
    }

    render() {   
        return (
            <div className="action-pill-container hover-effect border-effect">
                <a href='# '>
                    <Icon type={this.props.type} theme="filled"/>
                </a>
            </div>
        );
    }
}

export default ActionPill;
