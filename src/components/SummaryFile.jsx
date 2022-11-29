import '../styles/SummaryFile.css';

export function SummaryComponent(props) {
  const { cartItems} = props;

  const totalItems = cartItems.reduce((a, b) => {
    return a + b.qty;
  }, 0);

  const totalSquareMeters = cartItems.reduce((a, b) => {
    return a + b.qty * b.factor;
  }, 0);

  return(
    <>
    <h1>Summary</h1>
    <div className="summary-div">
      <div className='inner-div'>
        <p>Total Items</p>
        <p>{totalItems}</p>
      </div>
      <div className='inner-div'>
        <p>Total M2</p>
        <p>{totalSquareMeters.toFixed(2)}</p>
      </div>
      <div className='inner-div'>
        <p>Subtotal</p>
        <p>${(totalSquareMeters * 200).toFixed()}</p>
      </div>
      <div className='inner-div'>
        <p>Tax</p>
        <p>${(totalSquareMeters * 200 * 0.16).toFixed(1)}</p>
      </div>
      <div className='inner-div'>
        <p><strong>Total</strong></p>
        <p><strong>${(totalSquareMeters * 200 * 1.16).toFixed(1)}</strong></p>
      </div>
      <div className='inner-div'>
        <p><strong>Due Today 50%</strong></p>
        <p><strong>${(totalSquareMeters * 200 * 1.16 * 0.5).toFixed(1)}</strong></p>
      </div>
    </div>
    </>
  );
};