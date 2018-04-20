import React, { Component } from 'react';

import ProductTable from "../presentationComponents/ProductTable";

class ReadAllProducts extends Component {
    constructor(props) {
        super(props);

        this.state = { products: "" }
    }

    componentDidMount() {
        fetch("http://localhost/ReactJS-apps/reactjs-product-catalog/api/product/read.php").then((data) => {
            return data.json();
        })
            .then((products) => {
                this.setState({ products: products })
            });
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={() => this.props.changeAppMode("CreateProduct")}>Create Product</button>

                <div>
                    <h2>Products List</h2>
                    <ProductTable products={this.state.products} />
                </div>
            </div>
        );
    }
}

export default ReadAllProducts;
