import { ProductCard, ProductImage, ProductTitle, ProductButtons  } from '../components';


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
            <ProductCard product={ product }>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </ ProductCard>

            {/* forma #2 de exportar, requiere modificar el export del componente padre */}
            <ProductCard product={ product }>
              <ProductCard.Image />
              <ProductCard.Title title='Hola Mundo' />
              <ProductCard.Buttons />
            </ ProductCard> 
        </div>
    </div>
  )
}
