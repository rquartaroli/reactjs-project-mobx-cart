import { inject, observer } from "mobx-react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ICartState } from "../../store/modules/cart/types";

import {
  Container,
  WrapperContent,
  Content,
  TitleLogo,
  Nav,
  Ul,
  WrapperQuantityItensCart,
  QuantityItensCart,
} from './styles';

interface HeaderProps {
  CartStore?: any;
}

interface CartStoreProps {
  cartStore: ICartState;
}

const Header = ({ CartStore }: HeaderProps) => {

  const { cartStore }: CartStoreProps = CartStore;

  let quantityItensInCart = 0;

  cartStore.items.map(item =>
    quantityItensInCart += item.quantity
  );

  return (
    <Container>
      <WrapperContent>
        <Content>
          <Link to="/" className="enter-dashboard">
            <TitleLogo>E-Store</TitleLogo>
          </Link>
        </Content>
        <Nav>
          <Ul>
            <Link to="/cart" className="enter-cart">
              <FaShoppingCart
                style={{ fontSize: '1.8rem' }}
              />
            </Link>
            {quantityItensInCart > 0 &&
              <WrapperQuantityItensCart>
                <QuantityItensCart>{quantityItensInCart}</QuantityItensCart>
              </WrapperQuantityItensCart>
            }
          </Ul>
        </Nav>
      </WrapperContent>
    </Container>
  );
}

export default inject('CartStore')(observer(Header));