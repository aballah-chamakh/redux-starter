const initialState  = {
  cart_nb : 1 ,
}
const Reducer = (state=initialState,action)=>{

  let newState = Object.assign({},state)

  switch (action.type) {
    case 'add':
    newState.cart_nb += 1
    console.log('aa');
    return newState
    case 'remove':
    newState.cart_nb -= 1
    return newState
    default:
    return newState ;

  }
}
export default Reducer ;
