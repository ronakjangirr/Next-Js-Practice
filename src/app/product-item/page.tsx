'use client';

import { useRouter } from 'next/navigation';

const products = [
  { id: '1', name: 'iPhone 15' },
  { id: '2', name: 'Samsung Galaxy S23' },
  { id: '3', name: 'Google Pixel 8' },
];

export default function ProductList() {
  const router = useRouter();

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => router.push(`/product-item/${product.id}`)}
          style={{
            border: '1px solid gray',
            padding: '1rem',
            cursor: 'pointer',
            borderRadius: '8px',
          }}
        >
          <strong>{product.name}</strong>
        </div>
      ))}
    </div>
  );
}