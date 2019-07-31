import React, { Component } from 'react';
import { Asset as IAsset } from '../interfaces/Asset';
import * as HTTPService from '../services/HTTPService';

import './Navigation.css';
import 'rbx/index.css';
import { Container, Navbar, Field, Control, Input, Button } from 'rbx';

/**
 * I use require() because importing a svg gives an error in Typescipt.
 * This is a simple solution.
 */
const logoPath = require('../images/Stingrayy.svg') as string;

export default class Navigation extends Component<{}, {assets: IAsset[], searchValue: string}> {
    constructor(props: any) {
        super(props);

        /**
         * Initialises the state of the App component to expect an array of objects like IAsset.
         */
        this.state = {
            assets: [],
            searchValue: ''
        }
    }

    handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            searchValue: e.currentTarget.value
        })
    }

    searchAsset = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        HTTPService.getAssetsFor(this.state.searchValue)
        .then(res => {
            /**
             * TODO: 
             * Create search page (big search in header area with assets underneath)
             * Open search page on search submit
             * Create getAssetsFor function in backend
             */
            this.setState({
                assets: res
            });
        });
    }

    render() {
        return (
            <Navbar fixed="top" >
                <Container fluid>
                    <Navbar.Brand>
                        <Navbar.Item href="">
                            <img src={logoPath} alt="Stingrayy" role="presentation" />
                        </Navbar.Item>
                        <Navbar.Burger />
                    </Navbar.Brand>
                    <Navbar.Menu>
                        <Navbar.Segment align="end">
                            <Navbar.Item href="">Home</Navbar.Item>
                            <Navbar.Item href="https://github.com/tibeauschodts/Stingrayy">GitHub</Navbar.Item>
                            <Navbar.Item>
                                <Field kind="addons">
                                    <Control>
                                        <Input onChange={this.handleChange} name="searchValue" placeholder="Asset name" />
                                    </Control>
                                    <Control>
                                        <Button onClick={this.searchAsset} color="info">Search</Button>
                                    </Control>
                                </Field>
                            </Navbar.Item>
                        </Navbar.Segment>
                    </Navbar.Menu>
                </Container>
            </Navbar>
        )
    }
}