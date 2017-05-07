import React, { Component } from 'react';
import {
	Intro,
	IntroCopy,
    Marquee,
    TriangleGrid,
} from 'components';
import style from './ParallaExample.scss';

export default class ParallaxExample extends Component {

    render() {
        return (
            <div className={style.root}>
                <Intro />
                <IntroCopy />
                <Marquee />
                <TriangleGrid />
            </div>
        );
    }

}
