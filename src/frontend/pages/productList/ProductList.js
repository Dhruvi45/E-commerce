import React, { useEffect } from 'react'
import { axiosGet } from '../../utils/Helper'
import { toast } from 'react-toastify';
import { useState } from 'react';
import ProductCard from '../../component/product/ProductCard';
import '../../assets/style/productList.css'
export default function ProductList() {
  const [productList, setProductList] = useState([])
  const getProductList = async () => {
    await axiosGet('/api/products')
      .then((res) => { setProductList(res.data.products) })
      .catch((error) => {
        toast.error(error)
      })
  }
  useEffect(() => {
    getProductList()

  }, [])

  return (
    <>
      <div >
        {productList.map((product, index) => {
          return (
            <ProductCard product={product} />
          )
        })}
      </div>
    </>
  )
}
