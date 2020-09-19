import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';
import React from 'react';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
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
                <tr>
                    <td>
                        <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/0b9411c8634d419f84c0a9d8010d24e4_9366/Tenis_U_Path_Preto_G28107_01_standard.jpg" alt="Tênis"/>
                    </td>
                    <td>
                        <strong>Tênis muito massa</strong>
                        <span>R$ 129,90</span>
                    </td>
                    <td>
                        <div>
                            <button type="button">
                                <MdRemoveCircleOutline size={20} color="#7159C1" />
                            </button>
                            <input type="number" readOnly value={2} />
                            <button type="button">
                                <MdAddCircleOutline size={20} color="#7159C1" />
                            </button>
                        </div>
                    </td>
                    <td>
                        <strong>R$259,80</strong>
                    </td>
                    <td>
                        <button type="button">
                            <MdDelete size={20} color="#7159C1" />
                        </button>
                    </td>
                </tr>
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


