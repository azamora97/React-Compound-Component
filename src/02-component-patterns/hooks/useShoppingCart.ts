import { useState } from 'react';
import { ProductInCard, Product } from '../interface/Interfaces';


export const useShoppingCart = () => {

    const[shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCard }>({});

    const onProductCountChange = ({ count, product }: {count: number, product: Product}) => {
    
    setShoppingCart(oldShoppingCard => {

      // manejando el estado en el useProduct hook
        if(count === 0) {
            const { [product.id]: toDelete, ...rest } = oldShoppingCard;
          
            return rest;
        }

        return {
          ...oldShoppingCard,
          [product.id]: { ...product, count }
        };
    });
  }

  return {
    shoppingCart, 
    onProductCountChange
  }
}
