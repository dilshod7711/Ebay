import React from 'react'
import { useFitch } from '../../hooks/useFitch'
import "../shipping/SHipping.css"


const SHipping = () => {
    const data = useFitch("/products")

  return (

<>
{
    <marquee behavior=" scroll " direction=" " scrollamount="20"><div className="flex  justify-center cursor-pointer product-container w-full " >
    {data.slice(0,5 ).map(product => (
      <div key={product.id} className="product-card p-4 m-2 max-w-xs border rounded w-full">
        <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover hover:opacity-75" />
        <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
        <div className="text-red-500">
          {product.discountPercentage > 0 && (
            <span className="pr-2">20% off: WHOLEHOME20</span>
          )}
        </div>
        <div className="text-gray-700">
          <span className="text-lg font-bold">${product.price}</span>
          <span className="line-through ml-2">${product.price + (product.discountPercentage / 100) * product.price}</span>
          <span className="ml-2">{Math.floor(product.discountPercentage)}% OFF</span>
        </div>
      </div>
    ))}
  </div></marquee>
}
</>
  )
}

export default SHipping