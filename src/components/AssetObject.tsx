import React, { Component } from 'react';
import { Asset as IAsset } from '../interfaces/Asset';

import './AssetObject.css';
import 'rbx/index.css';
import { Image, Container, Column } from 'rbx';

/**
 * I use require() because importing a svg gives an error in Typescipt.
 * This is a simple solution.
 */
const imagePath = require('../images/NoImage.svg') as string;

export default class AssetObject extends Component<IAsset> {
    showImage(image_url: any) {
        /**
         * Check if the image_url of the Asset exists. If it doesn't exist, use a placeholder image.
         */
        if (image_url) {
            return (
                <Image src={image_url} alt="Asset illustration" role="presentation" />
            )
        } else {
            return (
                <Image size="square" src={imagePath} alt="No image found" role="presentation" />
            )
        }
    }

    render() {
        const { name, description, symbol, created_date, image_url, external_link, opensea_link } = this.props;
        const date: string = new Date(created_date).toLocaleDateString();

        return (
            <Container className="asset-object">
                <Column.Group>
                    <Column size={4}>
                        {this.showImage(image_url)}
                    </Column>
                    <Column size={6}>
                        <h3>{name}</h3>
                        <div className="description">
                            <p className="date">Created on {date}</p>
                            <p>{description}</p>
                        </div>
                        <a className="link" href={external_link}>View source</a>
                        <a className="link" href={opensea_link}>View on OpenSea</a>
                    </Column>
                    <Column size={2}>
                        <p className="symbol">{symbol}</p>
                    </Column>
                </Column.Group>
            </Container>
        )
    }
}