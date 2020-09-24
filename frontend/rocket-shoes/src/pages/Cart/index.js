import { connect } from 'react-redux';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';
import React from 'react';

import { bindActionCreators } from 'redux';
import { formatPrice } from '../../util/format';

import { Container, ProductTable, Total } from './styles';
import * as CartActions from '../../store/modules/cart/actions';
import produce from 'immer';

function Cart({ cart, removeFromCart, updateAmount, total }) {


    function increment(product) {
        updateAmount(product.id, product.amount + 1)
    }

    function decrement(product) {
        updateAmount(product.id, product.amount - 1)
    }

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
                                <button type="button" onClick={() => decrement(product)}>
                                    <MdRemoveCircleOutline size={20} color="#7159C1" />
                                </button>
                                <input type="number" readOnly value={product.amount} />
                                <button type="button" onClick={() => increment(product)}>
                                    <MdAddCircleOutline size={20} color="#7159C1" />
                                </button>
                            </div>
                        </td>
                        <td>
                            <strong>{product.subtotal}</strong>
                        </td>
                        <td>
                            <button type="button" onClick={() => removeFromCart(product.id)}>
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
                    <strong>{total}</strong>
                </Total>
            </footer>
        </Container>
    )
}

const mapStateToProps = state => ({
    cart: state.cart.map(product => ({
        ...product,
        subtotal: formatPrice(product.price * product.amount)
    })),
    total: formatPrice(state.cart.reduce((total, product) => {
        return total + product.price * product.amount;
    }, 0))
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
