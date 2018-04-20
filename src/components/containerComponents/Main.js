import React, { Component } from 'react';

import ReadAllProducts from "./ReadAllProducts";
import ReadOneProduct from "./ReadOneProduct";
import CreateProduct from "./CreateProduct";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { currentMode: "ReadAllProducts" };

        this.fnChangeAppMode = this.fnChangeAppMode.bind(this);
    }

    fnChangeAppMode(mode) {
        this.setState({ currentMode: mode });
    }

    render() {

        switch (this.state.currentMode) {

            case "ReadAllProducts":
                return (<div><ReadAllProducts changeAppMode={this.fnChangeAppMode} /></div>);

            case "ReadOneProduct":
                return (<div><ReadOneProduct changeAppMode={this.fnChangeAppMode} /></div>);

            case "CreateProduct":
                return (<div><CreateProduct changeAppMode={this.fnChangeAppMode} /></div>);

            default:
                return (<div>No components selected</div>);
        }

    }
}

export default Main;
