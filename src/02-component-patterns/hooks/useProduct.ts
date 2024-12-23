import { useEffect, useRef, useState } from 'react'
import { Product, onChangeArg } from '../interface/Interfaces';


interface useProductProps {
    product: Product;
    onChange?: ( args: onChangeArg) => void;
    value?: number;
}

export const useProduct = ( { onChange, product, value = 0 }: useProductProps ) => {
 
    const[counter, setCounter ] = useState<number>(value);

    const isControlled = useRef( !!onChange );


    const increaseBy = ( value: number ): void => {

        if(isControlled.current) { 
            
            return onChange!({product, count: value}); 
            //simbolo de admiracion indica que le dice a TS que es confiable el metodo y no lleva nulos
        }

        const newValue = Math.max( counter + value, 0);
        setCounter( newValue );
        
        onChange && onChange({product, count: newValue});
    }

    useEffect(() => {
        setCounter(value);
    }, [value])

    return {
        counter,
        increaseBy
    }

}
