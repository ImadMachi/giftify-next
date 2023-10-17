import ReviewedProduct from '@/features/user/components/ReviewedProduct'
import React from 'react'

export default function Reviews() {

    
  return (
    <div className="p-10 h-full w-full strech">
			<div className="h-full">
                <ReviewedProduct />
                <ReviewedProduct />
                <ReviewedProduct />

            </div>
    </div>
  )
}

