import React, { useEffect, useContext } from 'react'
import { axiosGet } from '../../utils/Helper'
import { toast } from 'react-toastify';
import { useState } from 'react';
import ProductCard from '../../component/product/ProductCard';
import '../../assets/style/productList.css'
import { filterContext } from "../../component/layout/Layout";

export default function ProductList() {
  const { filter } = useContext(filterContext);

  const [productList, setProductList] = useState([])
  const getProductList = async () => {
    await axiosGet('/api/products')
      .then((res) => { setProductList(res.data.products) })
      .catch((error) => {
        toast.error(error)
      })
  }

  const getProductByCategoryList = async () => {
    console.log('filter', filter)
    await axiosGet(`/api/products/${filter.category}`)
      .then((res) => { setProductList(res.data.product) })
      .catch((error) => {
        toast.error(error)
      })
  }
  useEffect(() => {
    getProductList()
  }, [])

  useEffect(() => {
    console.log('filter', filter)

    // if (filter.category !== '')
    //   getProductByCategoryList()
    // else
    //   getProductList()
  }, [filter])

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
