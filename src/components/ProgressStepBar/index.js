import React, { Component } from 'react';
import './index.scss';
import PropTypes from 'prop-types';


class ProgressStepBar extends Component {

    static propTypes = {
        contractId: PropTypes.number,
        style: PropTypes.object,
    }

    state = {
        progressBar: 0
    }


    componentDidMount() {
        const progressBarWrapper = document.getElementsByClassName('progressbar');
        let totalSteps = progressBarWrapper[0].childElementCount;
        let activeStep = document.querySelectorAll('.active');
        let totalActiveStep = activeStep.length;
        let lastActiveStep = activeStep.length - 1;
        let progressbarSize  = (totalActiveStep / totalSteps)*100;

        // CHANGE TEXT STATUS STEP
        for (var i = 0; i< totalActiveStep; i++) {
            if (i === lastActiveStep && i !== totalSteps -1) {
                activeStep[i].innerHTML += "<span class='pending'>en cours</span>"
            } else if (i === totalSteps -1){
                activeStep[i].innerHTML += "<span></span>"
            } 
            else {
                activeStep[i].innerHTML += "<span>validé</span>"
            }
        }

        // CHANGE SIZE PROGRESS BAR BLUE
        if (totalActiveStep === totalSteps) {
            progressbarSize = progressbarSize -0
        } else {
            progressbarSize = progressbarSize -15
        }
        
        this.setState({
            progressBar : progressbarSize
        })
    }

  
    render() {
        return (
            <div id="foo" className="container">
                <div className="progress-bar-step-wrapper">
                    <div className="progress-bar-step" style={{width:`${this.state.progressBar}%`}}></div>
                </div>
                <ul className="progressbar">
                    <li className="active">Saisie et ouverture du contrat: </li>
                    <li className="active">Validation du contrat par Souscritoo: </li>
                    <li>Contrat validé !</li>
                </ul>
            </div>
        );
        
    }
}

export default ProgressStepBar;
