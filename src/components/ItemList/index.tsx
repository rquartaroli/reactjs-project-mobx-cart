import { inject, observer } from "mobx-react";
import { MdAddCircle, MdRemoveCircle, MdDelete } from "react-icons/md";
import { ICartItem, ICartState, IProduct } from "../../store/modules/cart/types";
import theme from "../../styles/theme";

import {
  WrapperContainer,
  Container,
  ContentLeft,
  Image,
  TitleItem,
  ContentRight,
  WrapperItemRightQuantity,
  WrapperQuantity,
  WrapperRemove,
  TitleQuantity,
  TitleRemove,
  WrapperItemRight,
  TitlePrice,
  Price,
  Hr,
} from './styles';

interface ItemListProps {
  itens: ICartItem;
  CartStore?: any;
}

interface CartStoreProps {
  cartStore: ICartState;
  addProductToCartSuccess: (product: IProduct) => Promise<void>;
  subtractProductFromCart: (product: IProduct) => void;
  removeProductFromCart: (productId: number) => void;
}

const ItemList = ({ itens, CartStore }: ItemListProps) => {

  const {
    cartStore,
    addProductToCartSuccess,
    subtractProductFromCart,
    removeProductFromCart,
  }: CartStoreProps = CartStore;

  const hasFailedStockCheck = cartStore.failedStockCheck.includes(itens.product.id) as boolean;

  return (
    <WrapperContainer>
      <Container>
        <ContentLeft>
          <Image src={itens.product.image} />
          <TitleItem>{itens.product.title}</TitleItem>
        </ContentLeft>

        <ContentRight>
          <WrapperItemRightQuantity>
            <TitlePrice>Quantidade</TitlePrice>
            <WrapperQuantity>
              {itens.quantity > 1
                ?
                <MdRemoveCircle
                  onClick={() => subtractProductFromCart(itens.product)}
                  style={{ color: theme.COLORS.PRIMARY_COLOR, cursor: 'pointer' }}
                />
                :
                <MdRemoveCircle
                  style={{ color: theme.COLORS.TEXT }}
                />
              }
              <TitleQuantity>{itens.quantity}</TitleQuantity>
              {hasFailedStockCheck
                ?
                <MdAddCircle
                  title="No momento não existe mais desse item no estoque."
                  style={{ color: theme.COLORS.TEXT }}
                />
                :
                <MdAddCircle
                  onClick={() => addProductToCartSuccess(itens.product)}
                  style={{ color: theme.COLORS.PRIMARY_COLOR, cursor: 'pointer' }}
                />
              }
            </WrapperQuantity>

            <WrapperRemove
              onClick={() => removeProductFromCart(itens.product.id)}
              style={{ color: theme.COLORS.WARNING, cursor: 'pointer' }}
            >
              <MdDelete />
              <TitleRemove>Remover</TitleRemove>
            </WrapperRemove>
          </WrapperItemRightQuantity>

          <WrapperItemRight>
            <TitlePrice>SubTotal:</TitlePrice>
            <Price>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format((itens.product.price * itens.quantity))
              }
            </Price>
          </WrapperItemRight>
        </ContentRight>
      </Container>

      <Hr />

    </WrapperContainer>
  );
}

export default inject('CartStore')(observer(ItemList));