import React from 'react';

function AllTheThings(props) {
  const products = props.products.map((ele, index)=>{
    return(
      <li 
      onClick={() => props.addToCart(ele)}
      key={index}
      >
        {ele.name} - ${ele.price}
      </li>
    )  
  })

  return (
    
    <div className="AllTheThings">
      <h2>Put these in your cart!</h2>
      <ul>{products}</ul>
    </div>
      

  );
}

export default AllTheThings;