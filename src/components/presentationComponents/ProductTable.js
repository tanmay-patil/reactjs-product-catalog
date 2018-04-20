import React, { Component } from 'react';

import ProductRow from "./ProductRow";

class ProductTable extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        var records = this.props.products.records;
        var rows = null;

        if (records != undefined) {
            console.log(records);

            rows = records.map(function (product, i) {
                return (<ProductRow key={i} srno={i + 1} product={product} />);
            });

        }

        return (
            rows != null
                ? <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Sr. No.</th>
                            <th scope="col">Product Name</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
                : <div className='alert alert-danger'>No products found.</div>
        );
    }
}

export default ProductTable;
