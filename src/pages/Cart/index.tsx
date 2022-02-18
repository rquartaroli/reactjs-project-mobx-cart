import { observer, inject } from 'mobx-react';

import Header from '../../components/Header';
import ItemList from '../../components/ItemList';
import { ICartState } from '../../store/modules/cart/types';

import {
  Container,
  WrapperWithoutContentCart,
  TitleWithoutContent,
  WrapperContent,
  Content,
  ContainerTotalItens,
  TitleOrder,
  WrapperSpaceBetween,
  TitleQuantityItens,
  TitleSumPrice,
  Hr,
  TitleTotal,
  TitleResultTotal,
} from './styles';

interface CartStoreProps {
  cartStore: ICartState;
}

const Cart = ({ CartStore }: any) => {
  const { cartStore }: CartStoreProps = CartStore;

  let quantityOrder = 0;
  let totalOrder = 0.00;

  return (
    <Container>
      <Header />
      {cartStore.items.length > 0
        ?
        <WrapperContent>

          <Content>
            {cartStore.items.map(item => (
              quantityOrder += item.quantity,
              totalOrder += (item.product.price * item.quantity),
              <ItemList key={item.product.id} itens={item} />
            ))}
          </Content>

          <ContainerTotalItens>
            <TitleOrder>Resumo do Pedido</TitleOrder>

            <WrapperSpaceBetween>
              <TitleQuantityItens>{quantityOrder} produtos</TitleQuantityItens>
              <TitleSumPrice>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(totalOrder)
                }
              </TitleSumPrice>
            </WrapperSpaceBetween>

            <Hr />

            <WrapperSpaceBetween>
              <TitleTotal>Total</TitleTotal>
              <TitleResultTotal>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(totalOrder)
                }
              </TitleResultTotal>
            </WrapperSpaceBetween>

          </ContainerTotalItens>
        </WrapperContent>
        :
        <WrapperWithoutContentCart>
          <TitleWithoutContent>Não contém nenhum item no carrinho :(</TitleWithoutContent>
        </WrapperWithoutContentCart>
      }
    </Container>
  );
}

export default inject('CartStore')(observer(Cart));