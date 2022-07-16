const reducer = (state,action) => {

  // to remove single cart item
    if(action.type==="REMOVE"){
        return{
             ...state,
             carts:state.carts.filter((item)=>{
              return  item.id!==action.payload
             })
            }
    }

    // to clear all cart items
    if(action.type==="CLEAR_ITEM"){
      return{
        ...state,
        carts:[]
      }
    }

    // to increase item quantity in cart
    if(action.type==="INCREMENT"){
      let selectedCart=state.carts.map((item)=>{
        if (item.id===action.payload){
          return{...item,quantity:item.quantity+1}
        }
        return item;
       })
      return{
        ...state,
        carts:selectedCart
      }
    }

    // to decrease item quantity in cart

    if(action.type==="DECREMENT"){
      let selectedCart=state.carts.map((item)=>{
        if (item.id===action.payload){
          return{...item,quantity:item.quantity-1}
        }
        return item;
       }).filter((item)=>{
        return item.quantity!==0
       })
      return{
        ...state,
        carts:selectedCart
      }
    }


    // to count total number of items and total amount
    if(action.type==="ITEM_COUNT"){
      let {itemCount,totalAmount}=state.carts.reduce((accum,curVal)=>{
        let {price,quantity}=curVal;
        let updateTotalAmount=price*quantity
        accum.totalAmount+=updateTotalAmount
        accum.itemCount+=quantity
        return accum;
      },{
        itemCount:0,
        totalAmount:0,
      })
      return {
        ...state,
        itemCount,
        totalAmount,
      }
    }
    if(action.type==="TOTAL_AMOUNT"){
      return{
        ...state,
      }
    }
  return state; 
}

export default reducer