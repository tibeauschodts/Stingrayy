
import React, { Component } from 'react';

import './Navigation.css';
import 'rbx/index.css';
import { Container, Navbar, Field, Control, Input, Button } from 'rbx';

/**
 * I use require() because importing a svg gives an error in Typescipt.
 * This is a simple solution.
 */
const logoPath = require('../images/Stingrayy.svg') as string;

export default class Navigation extends Component<{}> {
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
                            <Navbar.Item>Documentation</Navbar.Item>
                            <Navbar.Item>
                                <Field kind="addons">
                                    <Control>
                                        <Input placeholder="Asset name" />
                                    </Control>
                                    <Control>
                                        <Button color="info">Search</Button>
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