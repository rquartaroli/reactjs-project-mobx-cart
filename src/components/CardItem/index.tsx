import { observer, inject } from 'mobx-react';
import { useCallback } from 'react';

import { IProduct, ICartState } from '../../store/modules/cart/types';

import {
  Container,
  Image,
  Box,
  WrapperTitles,
  TitleItem,
  TitlePrice,
  ButtonBuy,
  ButtonUnavailable,
} from './styles';

interface CardItemProps {
  product: IProduct;
  CartStore?: any;
}

interface CartStoreProps {
  cartStore: ICartState;
  addProductToCartSuccess: (product: IProduct) => Promise<void>;
}

const CardItem = ({ product, CartStore }: CardItemProps) => {
  const { cartStore, addProductToCartSuccess }: CartStoreProps = CartStore;

  const hasFailedStockCheck = cartStore.failedStockCheck.includes(product.id) as boolean;

  const handleAddProductToCart = useCallback(() => {
    addProductToCartSuccess(product);
    alert('Item adicionado ao carrinho');
  }, []);

  return (
    <Container>
      <Image src={product.image} />
      <Box>
        <WrapperTitles>
          {product.title.length > 24
            ?
            <TitleItem title={product.title}>{product.title.substring(0, 21) + '...'}</TitleItem>
            :
            <TitleItem>{product.title}</TitleItem>
          }
          <TitlePrice>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(product.price)
            }
          </TitlePrice>
        </WrapperTitles>
      </Box>

      {hasFailedStockCheck
        ?
        <ButtonUnavailable>
          Indisponível
        </ButtonUnavailable>
        :
        <ButtonBuy
          type='button'
          onClick={handleAddProductToCart}
        >
          Comprar
        </ButtonBuy>
      }
    </Container>
  );
}

export default inject('CartStore')(observer(CardItem));