import '../styles/ItemFile.css';
import { ProductComponent } from './ProductFile';


export function ItemComponent(props) {
  const { cartItems, products, onAdd, onRemove } = props;
  return(
    <div className='items-div'>
      {products.map((product) => {
        return( 
          <ProductComponent 
            key={product.id} 
            product={product}
            item={cartItems.find(x => x.id === product.id)}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        );
      })}
    </div>
  );
};