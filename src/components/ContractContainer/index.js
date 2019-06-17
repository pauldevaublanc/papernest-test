import React, { Component } from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import config from '../../config/index.js';

// ANT-DESIGN
import { Icon } from 'antd';

// COMPONENTS
import ProgressBar from '../ProgressBar/index.js';
import ContractTablePreview from '../ContractTablePreview/index.js';
import ContractNewPreview from '../ContractNewPreview/index.js';
import ProgressStepBar from '../ProgressStepBar';



class ContractContainer extends Component {

    static propTypes = {
        id: PropTypes.number,
        title: PropTypes.string,
        cta: PropTypes.string,
        style: PropTypes.object,
    }

    render() {
        const user = config.user1[0];

        return (
            <div className="contract-container">
                <div>
                    <div className="contract-header">
                        <h2>{this.props.title}</h2>
                        {
                            this.props.cta && user.contracts[this.props.id].state !== "new" && 
                            <div>
                                <a href='# ' className="underline-effect">
                                    {this.props.cta} 
                                </a>
                                <Icon type="right" style={{color:'#00a5f2', marginLeft:'2px'}}/>
                            </div>
                        }
                    </div>
                    {
                        user.contracts[this.props.id].state === 'inProgress' ? <ProgressBar contractId={this.props.id}/>
                        : user.contracts[this.props.id].state === 'pending' ? <ProgressStepBar/> : null
                    }
                </div>
                {
                    user.contracts[this.props.id].state !== 'new' ? <ContractTablePreview contractId={this.props.id}/> : 
                    <ContractNewPreview contractId={this.props.id}/>
                }  
            </div>
        );
    }
}

export default ContractContainer;
