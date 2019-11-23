import React, { Component } from 'react';
import Slider from './slider';
export default class App extends Component {
    state = {
        currentImages: []
    };

    render() {

        return (
            <Slider/>
        );
    }
}
