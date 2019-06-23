import React, { Component } from 'react';
import { Asset as IAsset } from './interfaces/Asset';
import * as HTTPService from './services/HTTPService';

import Header from './components/Header';
import Navigation from './components/Navigation';
import AssetObject from './components/AssetObject';

export default class App extends Component<{}, {assets: IAsset[]}> {
    constructor(props: any) {
        super(props);

        this.state = {
            assets: []
        }
    }

    componentWillMount() {
        HTTPService.getAssets()
            .then(res => {
                this.setState({
                    assets: res
                });
            });
    }

    showAssets() {
        if (this.state.assets) {
            return (
                this.state.assets.map(asset => (
                    <AssetObject key={asset.token_id} token_id={asset.token_id} name={asset.name} description={asset.description} symbol={asset.symbol} created_date={asset.created_date} image_url={asset.image_url} external_link={asset.external_link} opensea_link={asset.opensea_link} />
                ))
            )
        }
    }

    render() {
        return (
            <div>
                <Navigation />
                <Header />
                
                {this.showAssets()}
            </div>
        )
    }
}