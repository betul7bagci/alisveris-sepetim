const ProductItem = ({ product, cart, setCart }) => {
    const findProduct = cart.find((item) => item.id === product.id);
  
    const addToCart = () => {
      setCart((prevCart) => {
        if (findProduct) {
          return prevCart;
        }
        return [...prevCart, product];
      });
    };
  
    return (
      <div className="border p-4 m-2 rounded-lg shadow-lg">
        <img 
          className="w-full h-48 object-cover rounded-t-lg"
          src={product.image} 
          alt="product image"
        />
        <div className="p-4">
          <h2 className="text-black-500 text-xl font-semibold">{product.name}</h2>
          <p className="text-purple-500 my-2">{product.price} TL</p>
          <button 
            className={`bg-purple-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full ${findProduct ? 'opacity-50 cursor-no-drop' : ''}`}
            onClick={addToCart}
            disabled={findProduct}
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductItem;