import React from 'react';

export default function ProductsTemplate({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: 'relative' }}>
      <h1>🛒 Our Products</h1>
      {children}
    </div>
  );
}
