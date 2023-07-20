import React, {useState,useEffect} from 'react'
import './Routes.css'
import axios from 'axios';


function Home() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      axios('https://fakestoreapi.com/products')
        .then(res => setProduct(res.data[0]))
        .finally(setLoading(false))
  }, [])


  return (
    <div>
      {loading && <h2>Loading...</h2>}

      {
        product &&
        <div className='Home container' key={product.id}>
          <div className="card">
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
        </div> 
    } 
    </div>
  )
}

export default Home