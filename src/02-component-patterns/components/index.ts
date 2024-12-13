// se requiere para HOC forma # 2
import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductCardHOCProps } from '../interface/Interfaces'; 

import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';


export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
});

// se usa en forma # 1 HOC
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';
export { ProductButtons } from './ProductButtons';