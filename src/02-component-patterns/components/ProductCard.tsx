import { createContext } from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, ProductCardProps } from '../interface/Interfaces';

import { ProductButtons, ProductImage, ProductTitle } from './';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({ product, children }: ProductCardProps) => {

  const { counter, increaseBy } = useProduct(); 

  return (
    <Provider value={{ 
        counter,
        increaseBy, 
        product
    }}>
        <div className={ styles.productCard }>
            { children }
            {/* <ProductImage img={ product.img } />
            <ProductTitle title={product.title} />
            <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
        </div>
    </Provider>
  )
}


// se requiere para importacion de forma #2 HOC 'Shopping Page' y cuando se tienen todos los componentes en un mismo archivo
// ProductCard.Image = ProductImage;
// ProductCard.Title = ProductTitle;
// ProductCard.Buttons = ProductButtons;
