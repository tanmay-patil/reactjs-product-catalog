import React, { Component } from 'react';

class ReadOneProduct extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <button type="button" class="btn btn-primary" onClick={() => this.props.changeAppMode("ReadAllProducts")}>See All Products</button>

                Read One
            </div>
        );
    }
}

export default ReadOneProduct;
