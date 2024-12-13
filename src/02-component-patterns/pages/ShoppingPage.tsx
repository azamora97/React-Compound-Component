import { ProductCard, ProductImage, ProductTitle, ProductButtons  } from '../components';
import '../styles/Custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

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
            
            {/* HOC */}
            {/* Forma #1 de hacerlo */}
            <ProductCard 
              product={ product }
              className='bg-dark'
            >
              <ProductImage className='custom-image'/>
              <ProductTitle className='text-white' />
              <ProductButtons className='custom-buttons' />
            </ ProductCard>

            {/* forma #2 de exportar, requiere modificar el export del componente padre */}
            <ProductCard product={ product } className='bg-dark' >
              <ProductCard.Image className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}} />
              <ProductCard.Title title='Hola Mundo' className='text-white'/>
              <ProductCard.Buttons className='custom-buttons' />
            </ ProductCard> 

            {/* forma #3 agregando styles en linea */}
            <ProductCard 
              product={ product }
              style={{
                  backgroundColor: '#70D1F8'
              }}
            >
              <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
              <ProductTitle style={{ fontWeight: 'bold' }} />
              <ProductButtons style={{
                  display: 'flex',
                  justifyContent: 'end'
              }} />
            </ ProductCard>
        </div>
    </div>
  )
}
