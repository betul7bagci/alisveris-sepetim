
const Cart = ({ cart, emptyCart }) => {
    const total = cart.reduce((acc, item) => acc + item.price, 0)
    if (cart.length === 0) return null;
  
    return (
      <div className="border ml-auto w-72 p-4 rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold mb-4">Sepetim</h2>
        <ul>
            {cart.map((item) => (
          <li className="mt-2 flex justify-between">
            <span>{item.name}</span>
            <span>{item.price} TL</span>
          </li>
          ))}
        </ul>
        <hr className="my-4" />
        <p className="font-semibold text-2xl">Toplam: {total} TL</p>
        <button
          className="bg-yellow-500 text-white 
          px-4 py-2 rounded w-full hover:bg-yellow-600 
          transition-all mt-7" onClick={emptyCart}
        >
          Sepeti Boşalt
        </button>
      </div>
    );
  };
  
  export default Cart;