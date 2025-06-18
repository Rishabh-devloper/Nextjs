import { notFound, redirect } from 'next/navigation'
import React from 'react'

const Review = async ({params}:{params:Promise<{reviewId:string , productId:string }>}) => {
    const reviewId = (await params).reviewId
    const productId = (await params).productId
    if(reviewId > '50'){
      redirect('/')
    }
  return (
    <div>Product {productId} Review {reviewId}</div>
  )
}

export default Review