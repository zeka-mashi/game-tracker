import React, { Component } from 'react';

class ImageComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <img src={this.props.url} width="38px" height="38px" alt={this.props.name} />
        );
    }
}

export default ImageComponent;