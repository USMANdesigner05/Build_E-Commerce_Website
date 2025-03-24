import React, { useEffect, useState } from 'react'
// bootstrap import this 
import './Product.css';

import Loader from '../component/Loader';
const Product = () => {
  // const MyName = useContext(Appcontext);
  const [productdata, setProductdata] = useState([])
  const [loading, setLoading] = useState(true)

  const CardgetData = async () => {
    try {
      const APIreponse = await fetch('https://dummyjson.com/carts');
      const CardItem = await APIreponse.json();
      setProductdata(CardItem.carts);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    CardgetData();
  }, [])

  if(loading){
    return (
      <>
        <div className="loader-spin">
          <div className="spinner"></div>
          <div className="spinner"></div>
          <div className="spinner"></div>
        </div>
      </>
    )
  }

  return (
    <>
      <h1 className='product-page-heading'>Product page</h1>
      <div className="product-item">
        {
          productdata.map((Card) => {
            const { id, products } = Card;

            return (
              <>
                {products.map((product) => {
                  const { title, price, thumbnail, productsId } = product;

                  return (
                    <div className="card" key={productsId}>
                      <div className="card-img">
                        <img src={thumbnail} alt="Card image" />
                      </div>
                      <div className="card-body">
                        <div className='carts-title'>{title}</div>
                        <div className='cart-price'>${price}</div>
                      </div>
                      <button className='card-btn' onClick={() => {
                        alert("click for Read More")
                      }}>read more </button>
                    </div>
                  )  // second return stop 
                  
                })} {/* product loop stop  */}
              </>
            ) // productdata state loop this return stop
          })
        }   {/* // productdata state loop this code end point  */} 
      </div>   {/* product-item class div stop code  */}
    </>
  )
}

export default Product;
