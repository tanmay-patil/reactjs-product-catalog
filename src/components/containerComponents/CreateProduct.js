import React, { Component } from 'react';

class CreateProduct extends Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={() => this.props.changeAppMode("ReadAllProducts")}>See All Products</button>

                Create Products
            </div>
        );
    }
}

export default CreateProduct;
