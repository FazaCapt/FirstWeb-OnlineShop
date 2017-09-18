// ******** Child Component


import React, { Component } from 'react';

class ChildProps extends Component {
    render() { 
        return <div onClick= {this.props.counterClick}>- { this.props.text }</div> // Cara penggunaan Props supahya lebih dinamis
    }
}

export default ChildProps;
