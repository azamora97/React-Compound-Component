import { ProductCard, ProductImage, ProductTitle, ProductButtons  } from '../components';
import '../styles/Custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';



export const ShoppingPage = () => {

  const {  shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr /> 

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
            
            {/* HOC */}
            {/* Forma #1 de hacerlo */}
            {/* <ProductCard 
              product={ product }
              className='bg-dark'
            >
              <ProductImage className='custom-image'/>
              <ProductTitle className='text-white' />
              <ProductButtons className='custom-buttons' />
            </ ProductCard> */}
            {/* forma #2 de exportar, requiere modificar el export del componente padre */}

            {

                products.map( (product) => (

                  <ProductCard 
                    key={ product.id }
                    product={ product } 
                    className='bg-dark'
                    onChange={ onProductCountChange }
                    value={ shoppingCart[product.id]?.count || 0 }
                  >
                      <ProductCard.Image className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}} />
                      <ProductCard.Title className='text-white'/>
                      <ProductCard.Buttons className='custom-buttons' />
                  </ ProductCard> 
                ))

            }


            <div className='shopping-cart'>
              {
                // formas de recorrer un objeto
                Object.entries( shoppingCart ).map( ([key, product]) => 
                //Object.keys(shoppingCart).map( item => ( 
                    <ProductCard 
                      key={ key }
                      product={ product }
                      className='bg-dark'
                      style={{ width: '100px'}}
                      onChange={ onProductCountChange }
                      value={ product.count }
                    >
                    <ProductImage className='custom-image'/>
                    <ProductButtons className='custom-buttons' style={{ display: 'flex', justifyContent: 'center' }} />
                  </ ProductCard>
                )
              }
            </div>

        </div>
    </div>
  )
}
