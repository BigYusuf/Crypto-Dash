import React from 'react'

import Table from '../components/table/Table'

import productList from '../assets/JsonData/product-list.json'

const productTableHead = [
    '',
    'image',
    'name',
    'category',
    'color',
    'price',
    'seller name',
    'in-stock',
    'action'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td> <img src={item.image} alt=''/></td>
        <td>{item.product_name}</td>
        <td>{item.category}</td>
        <td>{item.color}</td>
        <td>{item.price}</td>
        <td>{item.seller_name}</td>
        <td>{item.in_stock}</td>
        <td>
          <i className="bx bx-pen"></i>
          <i className="bx bx-trash" > </i>
        </td>
    </tr>
)

const Products = () => {
    return (
        <div>
            <h2 className="page-header">
                products
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='7'
                                headData={productTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={productList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
