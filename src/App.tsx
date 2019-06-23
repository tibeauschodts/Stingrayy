import React, { Component } from 'react';
import { Asset as IAsset } from './interfaces/Asset';
import * as HTTPService from './services/HTTPService';

import Header from './components/Header';
import Navigation from './components/Navigation';
import AssetObject from './components/AssetObject';

export default class App extends Component<{}, {assets: IAsset[]}> {
    constructor(props: any) {
        super(props);

        /**
         * Initialises the state of the App component to expect an array of objects like IAsset.
         */
        this.state = {
            assets: []
        }
    }

    /**
    * When the component is ready, use the HTTPService to make a HTTP request and get the assets,
    * add these assets to the state of the component
    */
    componentWillMount() {
        HTTPService.getAssets()
            .then(res => {
                this.setState({
                    assets: res
                });
            });
    }

    /**
     * If state.assets is filled, map through them and create a AssetObject component for each asset.
     */
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