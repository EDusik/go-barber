import { connect } from 'react-redux';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';
import React from 'react';

import { Container, ProductTable, Total } from './styles';

function Cart({ cart, dispatch }) {
  return (
      <Container>
          <ProductTable>
            <thead>
                <tr>
                    <th />
                    <th>produto</th>
                    <th>qdt</th>
                    <th>subtotal</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                {cart.map(product => (
                    <tr>
                        <td>
                            <img src={product.image} alt={product.title} />
                        </td>
                        <td>
                            <strong>{product.title}</strong>
                            <span>{product.priceFormatted}</span>
                        </td>
                        <td>
                            <div>
                                <button type="button">
                                    <MdRemoveCircleOutline size={20} color="#7159C1" />
                                </button>
                                <input type="number" readOnly value={product.amount} />
                                <button type="button">
                                    <MdAddCircleOutline size={20} color="#7159C1" />
                                </button>
                            </div>
                        </td>
                        <td>
                            <strong>R$259,80</strong>
                        </td>
                        <td>
                            <button type="button" onClick={() => dispatch({ type: 'REMOVE_FROM_CART', id: product.id })}>
                                <MdDelete size={20} color="#7159C1" />
                            </button>
                        </td>
                    </tr>
                ))}            
            </tbody>
          </ProductTable>
            <footer>
                <button type="button">
                    Finalizar pedido
                </button>
                <Total>
                    <span>Total</span>
                    <strong>R$259,80</strong>
                </Total>
            </footer>
      </Container>
  )
}

const mapStateToProps = state => ({
    cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
