import React from 'react'
import Layout from '../component/layout/Layout'
import { Routes, Route } from 'react-router-dom'
import ProductList from '../pages/productList/ProductList'
import Home from '../pages/Home'
import ProductCard from '../component/product/ProductCard'
import Cart from '../pages/cart/Cart'

export default function MyRoutes() {
    console.log('Routes')
    return (
        <>
            <Layout >
                {/* <Home /> */}
                {/* <Routes>
                </Routes> */}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/productList' element={<ProductList />} />
                    <Route path='/productCard' element={<ProductCard />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </Layout>
        </>
    )
}
