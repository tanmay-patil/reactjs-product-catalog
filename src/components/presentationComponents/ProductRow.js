import React, { Component } from 'react';

class ProductRow extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.srno}
                </td>
                <td>
                    {this.props.product.name}
                </td>
            </tr>
        );
    }
}

export default ProductRow;
