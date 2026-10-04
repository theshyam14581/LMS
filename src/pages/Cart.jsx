import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import bookData from '../../users.json'


const Cart = () => {
  return (
    <div>
        <Navbar />
        <Card bookData={bookData} />
        <Footer />
      
    </div>
  )
}

export default Cart
