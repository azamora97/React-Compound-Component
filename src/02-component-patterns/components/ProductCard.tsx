import { createContext, CSSProperties ,ReactElement } from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product } from '../interface/Interfaces';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductCard = ({ product, children, className, style }: Props) => {

  const { counter, increaseBy } = useProduct(); 

  return (
    <Provider value={{ 
        counter,
        increaseBy, 
        product
    }}>
        <div 
          className={ `${styles.productCard} ${className}` }
          style={ style }
        >
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
