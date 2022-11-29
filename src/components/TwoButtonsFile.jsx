import '../styles/TwoButtonsFile.css';

export function TwoButtonsComponent(props) {
  const { clearCart } = props;

  return(
    <>
      <div className="clear-calculate">
        <button
          onClick={() => clearCart()} 
          className='btn-white'
        >
          CLEAR
        </button>
        <button className='btn-orange'>CALCULATE</button>
      </div>
    </>
  );
};