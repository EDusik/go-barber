import { MdAddShoppingCart } from 'react-icons/md';
import { useDispatch ,useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';

import { formatPrice } from '../../util/format';
import { ProductList } from './styles';
import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';

export default function Home() {

    const dispatch = useDispatch();
    
    const [products, setProducts] = useState([]);
    const amount = useSelector(state => state.cart.reduce((sumAmount, product) => {
        sumAmount[product.id] = product.amount;
        return sumAmount;
    }, {}));

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get('products');

            const data = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price)
            }));
    
            setProducts(data);
        }

        loadProducts();
    }, []);

    function handleAddProduct(id) {
        dispatch(CartActions.addToCartRequest(id));
    }

    return (
        <ProductList>
            {products.map(product => (
                <li key={String(product.id)}>
                    <img src={product.image} alt={product.title} />
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>
    
                    <button type="button" onClick={() => handleAddProduct(product.id)}>
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />
                        {amount[product.id] || 0}
                    </div>
    
                    <span>adicionar ao carrinho</span>
                    </button>
                </li>
            ))}
        </ProductList>
    );
}

