import React from 'react'
import { SearchBar } from '../SearchBar'
import { ProductTable } from '../ProductTable'

export class FilterableProductTable extends React.Component {
    render() {
      return (
        <div>
          <SearchBar />
          <ProductTable products={this.props.products} />
        </div>
      );
    }
  }