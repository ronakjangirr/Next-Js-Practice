import Link from 'next/link'
import React from 'react'

function DynamicLinkRoute() {
 const products = [
  { id: 1, name: "iPhone 15" },
  { id: 2, name: "Samsung Galaxy" },
  { id: 3, name: "Google Pixel" },
];

  return (
    <div>
        <h1>DynamicLinkRoute</h1>
        <Link href="/about">About</Link>
        <h1><b>Select Below Products so see there details:</b></h1>
        
      <ul>

        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/product/${product.id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DynamicLinkRoute