import React from 'react'
import Layout from '../component/layout/Layout'
import { Routes, Route } from 'react-router-dom'
import ProductList from '../pages/productList/ProductList'
import Home from '../pages/Home'
import Cart from '../pages/cart/Cart'
import Product from '../pages/product/product'

export default function MyRoutes() {
    return (
        <>
            <Layout >
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/productList' element={<ProductList />} />
                    <Route path='/product/:id' element={<Product/>} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </Layout>
        </>
    )
}
