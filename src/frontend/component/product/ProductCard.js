import React,{useState, useEffect} from 'react'
import axios from 'axios';
export default function ProductCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    axios.get('/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);
  console.log('products', products)
  return (
    <div>ProductCard</div>
  )
}
