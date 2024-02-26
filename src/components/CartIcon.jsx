import { RiShoppingBag2Fill } from "react-icons/ri";


const Cartion = ({ cart }) => {
  return (
    <div className="relative">
        <RiShoppingBag2Fill className="text-2xl"/>
          {cart.length > 0 && (
            <span className=" bg-purple-500 text-white flex w-5 h-5 
            justify-center items-center rounded-full 
            absolute -top-4 -right-2 text-xl">{cart.length}
            </span>
          )}
        </div>
  )
}

export default Cartion