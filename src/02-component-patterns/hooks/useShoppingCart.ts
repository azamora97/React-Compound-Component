import { useState } from 'react';
import { ProductInCard, Product } from '../interface/Interfaces';


export const useShoppingCart = () => {

    const[shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCard }>({});

    const onProductCountChange = ({ count, product }: {count: number, product: Product}) => {
    
    setShoppingCart(oldShoppingCard => {

      // manejando el estado fuera el use Product hook
      const productInCart: ProductInCard = oldShoppingCard[product.id] || { ...product, count: 0 };

      if( Math.max(productInCart.count + count, 0) > 0 ) {
          productInCart.count += count;
          return {
            ...oldShoppingCard,
            [product.id]: productInCart
          }
      }

      // Borrar el producto
      const { [product.id]: toDelete, ...rest } = oldShoppingCard;
      return rest;

      // manejando el estado en el useProduct hook
        // if(count === 0) {
        //     const { [product.id]: toDelete, ...rest } = oldShoppingCard;
          
        //     return rest;
        // }

        // return {
        //   ...oldShoppingCard,
        //   [product.id]: { ...product, count }
        // };
    });
  }

  return {
    shoppingCart, 
    onProductCountChange
  }
}
