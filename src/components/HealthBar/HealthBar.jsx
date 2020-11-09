import React from 'react';

class HealthBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return ( 
            <h1>{this.props.health}</h1>
        )
    }   
}

export default HealthBar