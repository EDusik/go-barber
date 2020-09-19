import { MdAddShoppingCart } from 'react-icons/md';
import React from 'react';

import { ProductList } from './styles';

export default function Home() {
  return(
    <ProductList> 
        <li>
            <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/0b9411c8634d419f84c0a9d8010d24e4_9366/Tenis_U_Path_Preto_G28107_01_standard.jpg" alt="Tênis" />
            <strong>Tênis muito legal</strong>
            <span>R$ 129,90</span>

            <button type="button">
                <div>
                    <MdAddShoppingCart size={16} color="#FFF" />
                    3
                </div>
                <span>adicionar ao carrinho</span>
            </button>     
        </li>
    </ProductList>
  )
}

