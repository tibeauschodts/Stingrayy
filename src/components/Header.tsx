import React, { Component } from 'react';

import './Header.css';
import 'rbx/index.css';
import { Title } from 'rbx';

export default class Header extends Component<{}> {
    render() {
        return (
            <header>
                <Title>Stingrayy is a NFT browser</Title>
                <Title subtitle>using the OpenSea API</Title>
            </header>
        )
    }
}