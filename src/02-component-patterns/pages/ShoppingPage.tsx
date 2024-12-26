import { ProductCard, ProductImage, ProductTitle, ProductButtons  } from '../components';
import '../styles/Custom-styles.css';
import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {


  return (
    <div>
        <h1>Shopping Store</h1>
        <hr /> 

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>

          <ProductCard 
            key={ product.id }
            product={ product } 
            className='bg-dark'
            initialValues={{
              count: 1,
              maxCount: 10
            }}
          >
            {
              ({
                count,
                maxCount,
                isMaxCountReached,
                increaseBy,
                reset
              }) => (
                <>
                  <ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}} />
                  <ProductTitle className='text-white'/>
                  <ProductButtons className='custom-buttons' />

                  <button onClick={reset}>reset</button>
                  <button onClick={ () => increaseBy( -2 ) } >-2</button>
                  {
                    (!isMaxCountReached && <button onClick={ () => increaseBy( 2 ) }>+2</button> )
                  }
                  
                  <span>{ count } - {maxCount}</span>
                </>
              )
            }
          </ ProductCard> 

        </div>
    </div>
  )
}
