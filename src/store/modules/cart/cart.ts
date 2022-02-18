import { AxiosResponse } from 'axios';
import { makeObservable, observable, action } from 'mobx';
import api from '../../../services/api';
import { ICartState, IProduct } from './types';

const INITIAL_STATE: ICartState = {
  items: [],
  failedStockCheck: [],
};

interface IStockResponse {
  id: number;
  quantity: number;
}

class CartStore {
  cartStore = INITIAL_STATE;

  constructor() {
    makeObservable(this, {
      cartStore: observable,
      addProductToCartSuccess: action,
      addProductToCartFailure: action,
      subtractProductFromCart: action,
      removeProductFromCart: action,
    })
  }

  addProductToCartSuccess = async (product: IProduct): Promise<void> => {

    const currentQuantity = this.cartStore.items.find(item => item.product.id === product.id)?.quantity ?? 0;

    const availableStockResponse: AxiosResponse<IStockResponse> = await api.get(`stock/${product.id}`);

    if (availableStockResponse.data.quantity > currentQuantity) {
      const productInCartIndex = this.cartStore.items.findIndex(item => item.product.id === product.id);

      if (productInCartIndex >= 0) {
        this.cartStore.items[productInCartIndex].quantity++;
      } else {
        this.cartStore.items.push({
          product,
          quantity: 1,
        });
      }

      if (availableStockResponse.data.quantity == (currentQuantity + 1)) {
        this.addProductToCartFailure(product.id);
        return;
      }
    }
  }

  addProductToCartFailure = (productId: number) => {
    this.cartStore.failedStockCheck.push(productId);
  }

  subtractProductFromCart = (product: IProduct) => {
    const productInCartIndex = this.cartStore.items.findIndex(item => item.product.id === product.id);

    if (productInCartIndex >= 0) {
      this.cartStore.items[productInCartIndex].quantity--;
    }

    const checkProductInFailedStockCheck = this.cartStore.failedStockCheck.findIndex(item => item === product.id);

    if (checkProductInFailedStockCheck >= 0) {
      this.cartStore.failedStockCheck.splice(checkProductInFailedStockCheck, 1);
    }
  }

  removeProductFromCart = (productId: number) => {
    const productInCartIndex = this.cartStore.items.findIndex(item => item.product.id === productId);

    if (productInCartIndex >= 0) {
      this.cartStore.items.splice(productInCartIndex, 1);
    }

    const checkProductInFailedStockCheck = this.cartStore.failedStockCheck.findIndex(item => item === productId);

    if (checkProductInFailedStockCheck >= 0) {
      this.cartStore.failedStockCheck.splice(checkProductInFailedStockCheck, 1);
    }
  }

}

export default new CartStore();