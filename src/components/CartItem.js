import {AiFillCaretDown,AiFillCaretUp,AiFillDelete} from "react-icons/ai"
import { useGlobalContext } from './Context'

const CartItem = () => {
    const {increaseItem,removeItem,carts,clearItem,totalAmount,decreaseItem}=useGlobalContext()

    
    if (carts.length===0){
        return <div className="empty">
            <h1>YOUR BAG</h1>
            <p>is currently empty</p>
        </div>
    }

  return (
    <div className='item-container'>

        
    {    carts.map((item)=>{
        const {id,title,price,img,quantity}=item

            return <div className='items' key={id}>
                <div className='image'>
                <img src={img} alt={title}></img>
                </div>

                <div className='description'>
                <h1>{title}</h1>
                <div className='item-count'>
                 <p className='amount'>रु{price}</p>
                <div className='btns'>
                <button className='btn' onClick={()=>decreaseItem(id)}><AiFillCaretDown/></button>
                    <p>{quantity}</p>
                    <button className='btn' onClick={()=>increaseItem(id)}><AiFillCaretUp/></button>
                    </div>
                    <div className='delete-btn' >
                        <button className='btn' onClick={()=>removeItem(id)}><AiFillDelete/></button>
                    </div>
                </div>
            <div className='line'></div>

                </div>

            </div>
        })}
        <div className='total'>
            <h2>Total</h2>
            <p>रु{totalAmount}</p>
        </div>
        <button className='btn1 checkout'>Checkout</button>
        <button className='btn1 clear-item' onClick={()=>clearItem()}>Clear Cart</button>
    </div>
  )
}

export default CartItem