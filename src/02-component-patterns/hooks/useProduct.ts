import { useEffect, useRef, useState } from 'react'
import { Product, onChangeArg, InitialValues } from '../interface/Interfaces';


interface useProductProps {
    product: Product;
    onChange?: ( args: onChangeArg) => void;
    value?: number;
    initialValues?: InitialValues
}

export const useProduct = ( { onChange, product, value = 0, initialValues }: useProductProps ) => {
 
    const[counter, setCounter ] = useState<number>( initialValues?.count || value );
    const isMounted = useRef(false);

    const increaseBy = ( value: number ): void => {

        let newValue = Math.max( counter + value, 0 );
        if( initialValues?.maxCount) {
            newValue = Math.min( newValue, initialValues.maxCount );
        }

        setCounter( newValue );
        onChange && onChange({product, count: newValue});
    }

    const reset = () => {
        setCounter(initialValues?.count || value);
    }

    useEffect(() => {

       if( !isMounted.current ) return; 
       setCounter(value);
       
    }, [value])

    useEffect(() => {
        isMounted.current = true;
    }, [])

    return {
        counter,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
        
        increaseBy,
        reset
    }

}
