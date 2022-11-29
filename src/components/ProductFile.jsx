import '../styles/ProductFile.css';

const itemImages = require.context('../images', true);

export function ProductComponent(props) {
  const { item, product, onAdd, onRemove } = props;

 return(
    <div className="item-container">
      <div className='nameImg'>
        <img src={itemImages(`./${product.icon}.png`)} alt={product.name} />
        <p>{product.name}</p>
      </div>
      <div className='buttons'>
        <button onClick={() => onAdd(product)}>+</button>
        <input 
          type="text"
          placeholder={item ? item.qty : 0}
        />
        {
          item ? <button onClick={() => onRemove(product)}>-</button> : <button>-</button>
        }
      </div>
    </div>
  );
};