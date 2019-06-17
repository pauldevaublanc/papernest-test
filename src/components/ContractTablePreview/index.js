import React, { Component } from 'react';
import './index.scss';
import PropTypes from 'prop-types';

import config from '../../config/index.js';


class ContractTablePreview extends Component {

    static propTypes = {
        contractId: PropTypes.number,
        style: PropTypes.object,
    }
  
    render() {
        const userContrat = config.user1[0].contracts[this.props.contractId];

        return (
            <div className="contract-table-container">
                <div className="table-wrapper">
                    <div>
                        {
                            userContrat.providerLogo === null ? 
                            <div className="no-logo"></div> :
                            <img src={require(`../../img/${userContrat.providerLogo}`)} alt="" />
                        }                        
                    </div>
                    <div className="contract-detail-container" style={{margin:0}}>
                        <h4>Contrat sélectionné</h4>
                        {
                            userContrat.contractType === null ? 
                            <h4 style={{fontSize:14}}>Aucun contrat sélectionné</h4> : 
                            <div>
                                <p>{userContrat.contractType}</p>
                                <p>{userContrat.price}€/mois TTC</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ContractTablePreview;
