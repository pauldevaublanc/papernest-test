import React, { Component } from 'react';
import './index.scss';
import PropTypes from 'prop-types';

import config from '../../config/index.js';

// ANT-DESIGN
import { Icon } from 'antd';





class ContractNewPreview extends Component {

    static propTypes = {
        contractId: PropTypes.number,
        style: PropTypes.object,
    }


  
    render() {
        const user = config.user1[0];

        return (
            <div className="contract-new-table">
                <div className="cta">
                    <Icon type="safety" style={{color:'#00a5f2', fontSize:33, marginRight: 20}}/>
                    <a href='# ' className="underline-effect">{user.contracts[this.props.contractId].cta}</a>
                    <Icon type="right" style={{color:'#00a5f2', marginLeft:5}}/>
                </div>
                <div className="data">
                    <p>Vous avez deja renseigné <span>{user.contracts[this.props.contractId].dataComplete}% des données</span> nécessaires à la souscription de ce contrat</p>
                </div>
                
                
            </div>
        );
    }
}

export default ContractNewPreview;
