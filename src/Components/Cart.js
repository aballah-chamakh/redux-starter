import React from 'react'
import {connect} from 'react-redux' ;

class Cart extends React.Component {
  render(){
    return(
      <div>
      <br/><br/>
         <center>
            <h1>Cart</h1>
            <h3>{this.props.cart_nb}</h3>
            <button className='btn btn-primary' onClick={this.props.add}>add</button><br/><br/>
            <button className="btn btn-warning" onClick={this.props.remove}>remove</button>
         </center>
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return {
    'cart_nb' : state.cart_nb ,
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    add : ()=>dispatch({type:'add'}),
    remove : ()=>dispatch({type:'remove'})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart) ;
