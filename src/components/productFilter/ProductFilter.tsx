'use client';

import Link from 'next/link';
import React from 'react';

function ProductFilter() {
  return (
    <div>
      <h2>Filter Products</h2>

      <Link href={{ pathname: '/product-list', query: { category: 'electronics', page: '2' } }}>
        <button>View Electronics (Page 2)</button>
      </Link>

      <br />

      <Link href={{ pathname: '/product-list', query: { category: 'books', page: '1' } }}>
        <button>View Books (Page 1)</button>
      </Link>
    </div>
  );
}

export default ProductFilter;