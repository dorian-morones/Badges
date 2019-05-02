import React, { Component } from 'react';
import loading from '../images/loading.gif'
import '../styles/Loader.css';

export default class Loader extends Component {
    render() {
        return (
            <div className="lds-grid">
                <img className="loadingImg" src={loading}></img>
            </div>
        );
    }
}