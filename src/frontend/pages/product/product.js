import React, { useState, useEffect } from 'react'
import { axiosGet } from '../../utils/Helper'
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { Loader, Rate } from 'rsuite';
import "../../assets/style/product.css"
export default function Product() {
  const { id } = useParams()
  const [product, setProduct] = useState()
  const [loading, setLoading] = useState(false)
  const getProduct = async () => {
    setLoading(true)
    await axiosGet(`/api/products/${id}`)
      .then((res) => {
        console.log('res', res)
        setProduct(res.data.product);
      })
      .catch((error) => {
        toast.error(error)
      })
    setLoading(false)
  }
  useEffect(() => {
    setLoading(true)
    getProduct()

  }, [])
  return (
    <>{loading && product === undefined ? <Loader size="lg" /> :
      <>
        <div className='d-flex'>
          <div>
            {product?.title && <img src={require(`../../assets/images/${product?.title}.jpg`)} alt={`${product?.title}`} />}
          </div>
          <div className='productDetails'>
            <h1>{product?.title}</h1>
            <Rate value={product?.rating} />
            <p><b>Prise: </b>{product?.price}</p>
            <p><b>Author: </b>{product?.author}</p>
            <p><b>Language: </b>{product?.Language}</p>
            <p><b>Rating: </b>{product?.rating}</p>
          </div>
        </div>
      </>
    }
    </>
  )
}
