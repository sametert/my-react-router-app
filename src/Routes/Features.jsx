import React, {useState,useEffect} from 'react'
import './Routes.css'
import axios from 'axios';

function Features() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
  } , [])


  return (
    <div className='Features container'> 

    {
      products.map((product) => (
        <div className="card" key={product.id}>
          <header>
            <h1>Welcome to Marketplacer</h1>
              <img src={product.image} alt="clothes" />
          </header>
          <section>
            <h3 className='title'>{product.title}</h3>
            <p className='description'>{product.description}</p>
            <p className='price'>${product.price}</p>
          </section>
        </div>
      ))
    }
       


        
    </div>
  )
}

export default Features