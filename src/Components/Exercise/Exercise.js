import React from 'react';
import './Exercise.css'


const Exercise = ({ex ,cart,setCart}) => {
    const {picture,name,id,timeRequired,age}=ex;


    const handleToCart=(id)=>{
      const newCart=[...cart,ex];
      setCart(newCart);
    }
    return (
        <div className='card'> 
        <div><img className='exercise-img' src={picture} alt="" /></div>
        <div>
           <h3>{name}</h3>
           <p>For-age:{age}</p>
           <p><strong>Time-required: </strong>
             {timeRequired} Min</p>
           <button onClick={()=>handleToCart(id)} className='cart-btn' style={{color:'white', fontSize:'18px'}}>Add to cart</button>
        </div>
        </div>
    );
};

export default Exercise;