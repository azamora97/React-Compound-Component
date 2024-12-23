import { useEffect, useState } from 'react'
import { Product, onChangeArg } from '../interface/Interfaces';


interface useProductProps {
    product: Product;
    onChange?: ( args: onChangeArg) => void;
    value?: number;
}

export const useProduct = ( { onChange, product, value = 0 }: useProductProps ) => {
 
    const[counter, setCounter ] = useState<number>(value);


    const increaseBy = ( value: number ): void => {

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
